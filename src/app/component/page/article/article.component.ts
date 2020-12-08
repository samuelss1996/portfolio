import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LanguageService} from '../../../service/language.service';
import {DomSanitizer} from '@angular/platform-browser';

// TODO maybe make all images links to themselves to watch bigger
// TODO maybe make all links to target blank
// TODO replace every itch.io picture with a good quality one
// TODO add black semi-transparent overlay to "read more"
// TODO add wanna see more projects? go to github in projects page
// TODO process local links as router link
// TODO replace every videogame with video game
// TODO maybe add border to article list thumbnail
// TODO put links to the other dudes
// TODO add links to companies in experience?
// TODO translate
// TODO update and paste CV as pdf
// TODO fill portfolio article
@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
    public article: any;

    constructor(
        private language: LanguageService,
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit(): void {
        this.route.data.subscribe(resolverData => {
            this.article = resolverData.response.data;
            this.article.content = this.sanitizer.bypassSecurityTrustHtml(this.article.content);
        });
    }
}
