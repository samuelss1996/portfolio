import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
    public title = 'General purpose languages';
    public iterations = new Array<number>(6);
    public languages = ['Java', 'Kotlin', 'C++', 'Python'];

    constructor() {
    }

    ngOnInit(): void {
    }

}
