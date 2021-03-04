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
        this.experience.sort((a, b) => Utils.compareDatesDescending(this.getEndDate(a), this.getEndDate(b)));
    }

    private getEndDate(experienceItem: any): Date {
        return experienceItem.date_end ? experienceItem.date_end : new Date(8640000000000000);
    }
}
