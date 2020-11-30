import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class APIService {
    public baseUrl = 'http://localhost:4200/api/';
    constructor(private http: HttpClient) {
    }

    get(url: string, params?: HttpParams): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.get(this.baseUrl + url);
    }
}
