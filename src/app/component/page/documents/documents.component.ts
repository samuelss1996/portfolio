import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LanguageService} from '../../../service/language.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-documents',
    templateUrl: './documents.component.html',
    styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
    public documentGroups: any[];

    constructor(private language: LanguageService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.data.subscribe(resolverData => {
            this.documentGroups = resolverData.response.data;
        });
    }
}
