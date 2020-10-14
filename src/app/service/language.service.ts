import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private static readonly availableLanguages = ['es', 'en'];
    private static readonly defaultLanguage = 'en';

    private languageCode: string;

    constructor(private translate: TranslateService) {
        this.languageCode = localStorage.getItem('language');

        if (this.languageCode === null) {
            this.setAndSaveLanguage(this.getNavigatorLanguage());
        }

        translate.setDefaultLang(LanguageService.defaultLanguage);
    }

    public setAndSaveLanguage(languageCode: string): void {
        let actualLanguage = languageCode.split('-')[0];
        actualLanguage = LanguageService.availableLanguages.includes(actualLanguage) ? actualLanguage : LanguageService.defaultLanguage;

        this.languageCode = actualLanguage;
        localStorage.setItem('language', this.languageCode);

        this.translate.use(this.languageCode);
    }

    private getNavigatorLanguage(): string {
        if (navigator.languages) {
            navigator.languages.forEach(lang => {
                lang = lang.split('-')[0];
                if (LanguageService.availableLanguages.includes(lang)) {
                    return lang;
                }
            });
        }

        // @ts-ignore
        return navigator.userLanguage || navigator.language;
    }
}
