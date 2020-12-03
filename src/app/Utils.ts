export class Utils {
    public static compareYearsDescending(a: string, b: string): number {
        return parseInt(a, 10) < parseInt(b, 10) ? 1 : -1;
    }
}
