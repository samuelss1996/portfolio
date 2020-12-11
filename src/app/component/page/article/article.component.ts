import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LanguageService} from '../../../service/language.service';
import {DomSanitizer} from '@angular/platform-browser';

// TODO beautify date format
// TODO favicon
// TODO duplicated ids in article htmls
// TODO inspect with anything
// TODO check URLs
// TODO put images to the usc awards as a link in the bio
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

            this.article.content = this.article.content.replace(/<a (.*?href="\/.*?".*?<\/a>)/gm, '<a class="router-link" $1');
            this.article.content = this.article.content.replace(/(<img .*? src="(.*?)".*?\/>)/gm, '<a target="_blank" href="$2">$1</a>');
            this.article.content = this.sanitizer.bypassSecurityTrustHtml(this.article.content);
        });
    }
}
