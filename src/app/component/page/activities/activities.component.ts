import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../../service/language.service';
import {ActivatedRoute} from '@angular/router';
import {i18n} from '../../../Utils';

@Component({
    selector: 'app-activities',
    templateUrl: '../projects/projects.component.html',
    styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
    public articleGroups: any[];

    constructor(private language: LanguageService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.data.subscribe(resolverData => {
            const articles = resolverData.response.data;

            this.articleGroups = [
                {title: i18n('Activities'), articles: articles.filter(article => article.category === 'activity')}
            ];
        });
    }
}
