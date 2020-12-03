import {Component, Input, OnInit} from '@angular/core';
import {Utils} from '../../../Utils';

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
        this.education.sort((a, b) => Utils.compareYearsDescending(a.year_end, b.year_end));
    }
}
