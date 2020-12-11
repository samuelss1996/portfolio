import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LanguageService} from '../language.service';

@Injectable({
    providedIn: 'root'
})
export class APIService {
    public baseUrl = '/api/';
    constructor(private http: HttpClient, private language: LanguageService) {
    }

    get(url: string): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(this.baseUrl + url, {headers, params: {lang: this.language.currentLanguage }});
    }
}
