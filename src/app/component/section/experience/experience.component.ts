import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
    @Input() imageSrc: string;
    @Input() dayStart: string;
    @Input() dayEnd: string;
    @Input() title: string;
    @Input() corporation: string;
    @Input() description: string;
}
