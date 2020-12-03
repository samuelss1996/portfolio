import {Component, Input, OnInit} from '@angular/core';
import {Utils} from '../../../Utils';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
    @Input() experience: any;

    ngOnInit(): void {
        this.experience.sort((a, b) => Utils.compareYearsDescending(a, b));
    }
}
