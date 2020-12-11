import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-badge-list',
    templateUrl: './badge-list.component.html',
    styleUrls: ['./badge-list.component.css']
})
export class BadgeListComponent implements OnInit {
    @Input() tags: string[];

    constructor() {
    }

    ngOnInit(): void {
    }
}
