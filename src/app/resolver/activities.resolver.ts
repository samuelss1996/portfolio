import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {forkJoin, Observable} from 'rxjs';
import {ProfileService} from '../service/profile/profile.service';
import {map} from 'rxjs/operators';
import {ArticleService} from '../service/article/article.service';

@Injectable({providedIn: 'root'})
export class ActivitiesResolver implements Resolve<any> {
    constructor(private service: ArticleService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.service.getArticlesByCategory(['activity']);
    }
}
