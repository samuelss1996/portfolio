import {Component} from '@angular/core';
import {LanguageService} from './service/language.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [LanguageService]
})
export class AppComponent {
    title = 'Portfolio';

    constructor(private language: LanguageService) {
    }
}
