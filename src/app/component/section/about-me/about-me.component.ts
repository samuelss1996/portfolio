import {Component, Input, OnInit} from '@angular/core';
import {Utils} from '../../../Utils';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
    @Input() about: any;
    @Input() education: any;

    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {
        this.education.sort((a, b) => Utils.compareYearsDescending(a.year_end, b.year_end));
        //
        // for (let i = 0; i < this.about.description.length; i++) {
        //     this.about.description[i] = this.sanitizer.bypassSecurityTrustHtml(this.about.description[i]);
        // }
    }
}
