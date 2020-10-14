import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-responsive-section',
    templateUrl: './responsive-section.component.html',
    styleUrls: ['./responsive-section.component.css']
})
export class ResponsiveSectionComponent implements OnInit {
    @Input() title: string;

    constructor() {
    }

    ngOnInit(): void {
    }
}
