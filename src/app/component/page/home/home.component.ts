import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../../service/language.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    constructor(private language: LanguageService) {
    }

    ngOnInit(): void {
    }
}
