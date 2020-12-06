import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LanguageService} from '../../../service/language.service';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

// TODO maybe make all images links to themselves to watch bigger
// TODO maybe make all links to target blank
// TODO replace every itch.io picture with a good quality one
// TODO add black semi-transparent overlay to "read more"
// TODO add wanna see more projects? go to github in projects page
// TODO process local links as router link
// TODO replace every videogame with video game
// TODO maybe add border to article list thumbnail
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
        private http: HttpClient,
        private sanitizer: DomSanitizer
    ) { }

    ngOnInit(): void {
        this.route.data.subscribe(resolverData => {
            this.article = resolverData.response.data;
            this.article.content = this.sanitizer.bypassSecurityTrustHtml(this.article.content);
        });
    }
}
