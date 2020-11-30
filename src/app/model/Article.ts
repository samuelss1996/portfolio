/* tslint:disable:variable-name */
export class Article {
    constructor(
        public _id: string,
        public title: string,
        public tags: [string],
        public picture: string,
        public description: [string],
        public external_links: [{icon: string, url: string}],
        public content: string
    ) {
    }
}
