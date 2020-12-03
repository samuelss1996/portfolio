import {Injectable} from '@angular/core';
import {APIService} from '../api/api.service';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    private baseUrl = 'article/';

    constructor(private apiService: APIService) { }

    getArticlesByCategory(categories: string[]): Observable<any> {
        return this.apiService.get(this.baseUrl + 'all/' + categories.join(','));
    }

    getArticleById(id: string): Observable<any> {
        return this.apiService.get(this.baseUrl + 'id/' + id);
    }
}
