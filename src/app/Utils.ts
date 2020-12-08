export class Utils {
    public static compareYearsDescending(a: string, b: string): number {
        return parseInt(a, 10) < parseInt(b, 10) ? 1 : -1;
    }

    public static compareDatesDescending(a: Date, b: Date): number {
        return a < b ? 1 : -1;
    }
}

export function i18n(str: string): string {
    return str;
}
