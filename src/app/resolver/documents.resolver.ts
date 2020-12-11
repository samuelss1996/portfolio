import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {DocumentService} from '../service/document/document.service';

@Injectable({providedIn: 'root'})
export class DocumentsResolver implements Resolve<any> {
    constructor(private service: DocumentService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return this.service.getDocuments();
    }
}
