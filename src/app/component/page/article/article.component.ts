import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LanguageService} from '../../../service/language.service';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

// TODO maybe make all images links to themselves to watch bigger
// TODO maybe make all links to target blank
// TODO replace every itch.io picture with a good quality one
// TODO add black semi-transparent overlay to "read more"
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
