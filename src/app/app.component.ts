import {Component, OnInit} from '@angular/core';
import {LanguageService} from './service/language.service';
import {Data, NavigationStart, Router, RouterOutlet} from '@angular/router';
import {fader} from './app.routing.animations';
import {AnimationEvent} from '@angular/animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [LanguageService],
    animations: [
        fader,
    ]
})
export class AppComponent {
    title = 'Portfolio';

    constructor(private router: Router, private language: LanguageService) { }

    onActivate($event: any): void {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 300);
    }
}
