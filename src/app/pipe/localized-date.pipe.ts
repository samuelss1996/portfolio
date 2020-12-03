import {Pipe, PipeTransform} from '@angular/core';
import {LanguageService} from '../service/language.service';
import {DatePipe} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';

@Pipe({
    name: 'localizedDate',
    pure: false
})
export class LocalizedDatePipe implements PipeTransform {

    constructor(private translateService: TranslateService) { }

    private static parseDate(value: string): Date {
        return new Date(value);
    }

    transform(value: string, pattern: string = 'shortDate'): any {
        const date = LocalizedDatePipe.parseDate(value);

        if (Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime())) {
            const datePipe: DatePipe = new DatePipe(this.translateService.currentLang);
            return datePipe.transform(date, pattern);
        }
    }
}
