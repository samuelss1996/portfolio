import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {forkJoin, Observable} from 'rxjs';
import {ProfileService} from '../service/profile/profile.service';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class HomeResolver implements Resolve<any> {
    constructor(private service: ProfileService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return forkJoin([
            this.service.getAbout(),
            this.service.getEducation(),
            this.service.getExperience(),
            this.service.getSkills()
        ]).pipe(map(([about, education, experience, skills]) => {
            return {about, education, experience, skills};
        }));
    }
}
