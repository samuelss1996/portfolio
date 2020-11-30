import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {APIService} from '../api/api.service';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    private baseUrl = 'profile/';

    constructor(private apiService: APIService) {
    }

    getAbout(): Observable<any> {
        return this.apiService.get(this.baseUrl + 'about');
    }

    getExperience(): Observable<any> {
        return this.apiService.get(this.baseUrl + 'experience');
    }

    getSkills(): Observable<any> {
        return this.apiService.get(this.baseUrl + 'skills');
    }
}
