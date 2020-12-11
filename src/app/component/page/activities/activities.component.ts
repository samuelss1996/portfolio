import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../../service/language.service';
import {ActivatedRoute} from '@angular/router';
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';

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
                {title: _('Activities'), articles: articles.filter(article => article.category === 'activity')}
            ];
        });
    }
}
