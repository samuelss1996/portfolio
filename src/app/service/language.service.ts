import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private static readonly availableLanguages = ['es', 'en'];
    private static readonly defaultLanguage = 'en';

    private currentLanguage: string;

    constructor(private translate: TranslateService) {
        this.currentLanguage = localStorage.getItem('language');

        if (this.currentLanguage === null) {
            this.setAndSaveLanguage(this.getNavigatorLanguage());
        }

        this.translate.use(this.currentLanguage);
        this.translate.setDefaultLang(LanguageService.defaultLanguage);
    }

    public setAndSaveLanguage(languageCode: string): void {
        let actualLanguage = languageCode.split('-')[0];
        actualLanguage = LanguageService.availableLanguages.includes(actualLanguage) ? actualLanguage : LanguageService.defaultLanguage;

        this.currentLanguage = actualLanguage;
        localStorage.setItem('language', this.currentLanguage);

        this.translate.use(this.currentLanguage);
    }

    public changeLanguage(): void {
        this.setAndSaveLanguage(LanguageService.availableLanguages.filter(i => i !== this.currentLanguage)[0]);
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
