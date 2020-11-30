import {Injectable} from '@angular/core';
import {APIService} from '../api/api.service';
import {Article} from '../../model/Article';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ArticleService {
    private baseUrl = 'article/';

    constructor(private apiService: APIService) {
    }

    getArticleById(id: string): Observable<any> {
        return this.apiService.get(this.baseUrl + 'id/' + id);
    }
}
