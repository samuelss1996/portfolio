import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
    @Input() about: any;
    @Input() education: any;

    constructor() {
    }

    ngOnInit(): void {
        this.education.sort((a, b) => this.compareYears(a.year_end, b.year_end));
    }

    compareYears(a: string, b: string): number {
        return parseInt(a, 10) < parseInt(b, 10) ? 1 : -1;
    }
}
