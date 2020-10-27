import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-article-list-item',
    templateUrl: './article-list-item.component.html',
    styleUrls: ['./article-list-item.component.css']
})
export class ArticleListItemComponent implements OnInit {
    public mouseOver: boolean;

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
    }

    onClicked(): void {
        this.router.navigate(['1'], { relativeTo: this.route });
    }
}
