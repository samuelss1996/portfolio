import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-article-external-links',
    templateUrl: './article-external-links.component.html',
    styleUrls: ['./article-external-links.component.css']
})
export class ArticleExternalLinksComponent implements OnInit {
    @Input() links: any[];

    constructor() {
    }

    ngOnInit(): void {
    }

}
