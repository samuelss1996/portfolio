import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {LanguageService} from '../../../service/language.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
    public sections = ['Videogames', 'Apps', 'Webs'];
    public articles = [1, 2, 3, 4];

    public resolverData$: Observable<any>;

    public videogames: any[];
    public apps: any[];
    public webs: any[];

    constructor(private language: LanguageService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.data.subscribe(resolverData => {
            const articles = resolverData.response.data;

            this.videogames = articles.filter(article => article.category === 'videogame');
            this.apps = articles.filter(article => article.category === 'app');
            this.webs = articles.filter(article => article.category === 'web');
        });
    }
}
