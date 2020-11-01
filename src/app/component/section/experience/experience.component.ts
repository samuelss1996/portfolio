import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
    public title = 'Research Support Superior Technician';
    public corporation = 'Centro Singular de Investigación en Tecnologías Inteligentes (USC)';
    public dayStart = '2020-08-24';
    public dayEnd = '2020-12-14';
    public description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    public imageSrc = 'assets/img/placeholder-icon.png';

    public iterations = new Array<number>(3);
}
