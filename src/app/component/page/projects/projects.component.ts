import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../../service/language.service';
import {ActivatedRoute} from '@angular/router';
import {i18n} from '../../../Utils';

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
                {title: i18n('Video games'), articles: articles.filter(article => article.category === 'videogame')},
                {title: i18n('Apps'), articles: articles.filter(article => article.category === 'app')},
                {title: i18n('Webs'), articles: articles.filter(article => article.category === 'web')}
            ];
        });
    }
}
