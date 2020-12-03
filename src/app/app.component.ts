import {Component, OnInit} from '@angular/core';
import {LanguageService} from './service/language.service';
import {Data, Event, NavigationEnd, NavigationStart, Router, RouterOutlet} from '@angular/router';
import {fader} from './app.routing.animations';

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
    public loading = true;

    constructor(private router: Router, private language: LanguageService) { }

    handleRoutingEvents(event: Event): void {
        if (event instanceof NavigationStart) {
            this.loading = true;
        } else if (event instanceof NavigationEnd) {
            this.loading = false;
        }
    }

    onActivate($event: any): void {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 300);
    }
}
