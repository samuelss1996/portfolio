import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-article-list-item',
    templateUrl: './article-list-item.component.html',
    styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent implements OnInit {
    @Input() article: any;
    public mouseOver: boolean;

    constructor() {
    }

    ngOnInit(): void {
    }
}
