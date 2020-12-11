import {Component, OnInit} from '@angular/core';
import {LanguageService} from '../../../service/language.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    public about: any;
    public education: any;
    public experience: any;
    public skills: any;

    constructor(private language: LanguageService, private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.data.subscribe(resolverData => {
            this.about = resolverData.response.about.data;
            this.education = resolverData.response.education.data;
            this.experience = resolverData.response.experience.data;
            this.skills = resolverData.response.skills.data;
        });
    }
}
