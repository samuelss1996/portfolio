import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private languageCode: string;

    constructor(private translate: TranslateService) {
        this.languageCode = localStorage.getItem('language');

        // TODO try to use navigator.languages
        if (this.languageCode === null) {
            // @ts-ignore
            this.setAndSaveLanguage(window.navigator.userLanguage || window.navigator.language);
        }

        translate.setDefaultLang('en');
        translate.use(this.languageCode);
    }

    public setAndSaveLanguage(languageCode: string): void {
        this.languageCode = languageCode.split('-')[0];
        localStorage.setItem('language', this.languageCode);
    }
}
