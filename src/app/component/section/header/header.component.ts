import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../../service/language.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private language: LanguageService) {
    }

    ngOnInit(): void {
    }

    changeLanguage(): void {
        this.language.changeLanguage();
    }
}
