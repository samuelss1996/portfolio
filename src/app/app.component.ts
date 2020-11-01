import {Component, OnInit} from '@angular/core';
import {LanguageService} from './service/language.service';
import {Data, NavigationStart, Router, RouterOutlet} from '@angular/router';
import {extend, fader} from './app.routing.animations';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [LanguageService],
    animations: [
        fader,
        extend
    ]
})
export class AppComponent {
    title = 'Portfolio';

    constructor(private router: Router, private language: LanguageService) {

    }
}
