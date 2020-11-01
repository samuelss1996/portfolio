import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-skill',
    templateUrl: './skill.component.html',
    styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
    public title = 'General purpose languages';
    public iterations = new Array<number>(6);
    public languages = ['Java', 'Kotlin', 'C++', 'Python'];

    constructor() {
    }

    ngOnInit(): void {
    }

}
