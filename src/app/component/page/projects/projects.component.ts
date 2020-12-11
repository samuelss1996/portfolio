import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../../service/language.service';
import {ActivatedRoute} from '@angular/router';
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    public articleGroups: any[];

    constructor(private language: LanguageService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.data.subscribe(resolverData => {
            const articles = resolverData.response.data;

            this.articleGroups = [
                {title: _('Video games'), articles: articles.filter(article => article.category === 'videogame')},
                {title: _('Apps'), articles: articles.filter(article => article.category === 'app')},
                {title: _('Webs'), articles: articles.filter(article => article.category === 'web')}
            ];
        });
    }
}
