import {Component, OnInit} from '@angular/core';
import {LanguageService} from './service/language.service';
import {Data, NavigationStart, Router, RouterOutlet} from '@angular/router';
import {extend, fader} from './app.routing.animations';
import {AnimationEvent} from '@angular/animations';

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

    public onAnimationEvent(event: AnimationEvent): void {

    }

    prepareRoute(outlet: RouterOutlet): Data {
        const result = outlet && outlet.activatedRouteData;
        console.log(outlet);

        return result;
    }
}
