import {Injectable} from '@angular/core';
import {APIService} from '../api/api.service';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DocumentService {
    private baseUrl = 'document/';

    constructor(private apiService: APIService) {
    }

    getDocuments(): Observable<any> {
        return this.apiService.get(this.baseUrl + 'all/');
    }
}
