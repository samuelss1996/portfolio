import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../../service/language.service';
import {Event, NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    public loading = true;

    constructor(public router: Router, private language: LanguageService) {
        this.router.events.subscribe(event => this.handleRoutingEvents(event));
    }

    handleRoutingEvents(event: Event): void {
        if (event instanceof NavigationStart) {
            this.loading = true;
        } else if (event instanceof NavigationEnd) {
            this.loading = false;
        }
    }

    changeLanguage(): void {
        this.language.changeLanguage();
    }
}
