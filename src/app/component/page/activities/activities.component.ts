import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-activities',
    templateUrl: '../projects/projects.component.html',
    styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
    public sections = ['Activities'];
    public articles = [1, 2, 3, 4];

    constructor() {
    }

    ngOnInit(): void {
    }

}
