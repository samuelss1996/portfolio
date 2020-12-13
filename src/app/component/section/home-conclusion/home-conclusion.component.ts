import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../../service/language.service';

@Component({
    selector: 'app-home-conclusion',
    templateUrl: './home-conclusion.component.html',
    styleUrls: ['./home-conclusion.component.css']
})
export class HomeConclusionComponent implements OnInit {
    public cvHref: string;

    constructor(private language: LanguageService) { }

    ngOnInit(): void {
        this.cvHref = `assets/pdf/cv/${this.language.currentLanguage}/SamuelSoutullo_CV.pdf`;
    }
}
