import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    @Input() about: any;
    @Input() experience: any;

    public mostRecentExperience: any;

    constructor() {
    }

    ngOnInit(): void {
        this.mostRecentExperience = this.experience.reduce((a, b) => a.date_end > b.date_end ? a : b);
    }
}
