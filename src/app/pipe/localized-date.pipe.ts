import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';
import {TranslateService} from '@ngx-translate/core';

@Pipe({
    name: 'localizedDate',
    pure: false
})
export class LocalizedDatePipe implements PipeTransform {

    constructor(private translate: TranslateService) { }

    private static parseDate(value: string): Date {
        return new Date(value);
    }

    transform(value: string): any {
        const date = LocalizedDatePipe.parseDate(value);
        const pattern = this.translate.currentLang === 'en' ? 'yyyy/MM/dd' : 'dd/MM/yyyy';

        if (Object.prototype.toString.call(date) === '[object Date]' && !isNaN(date.getTime())) {
            const datePipe: DatePipe = new DatePipe(this.translate.currentLang);
            return datePipe.transform(date, pattern);
        }
    }
}
