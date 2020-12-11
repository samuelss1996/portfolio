import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {ArticleService} from '../service/article/article.service';

@Injectable({providedIn: 'root'})
export class ArticleResolver implements Resolve<any> {
    constructor(private service: ArticleService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.service.getArticleById(route.params.id);
    }
}
