/* tslint:disable:variable-name */
export class Article {
    constructor(
        public _id: string,
        public title: string,
        public category: string,
        public tags: string[],
        public picture: string,
        public description: string[],
        public external_links: ExternalLink[],
        public content: string
    ) {
    }
}

export class ExternalLink {
    constructor(
        public icon: string,
        public url: string
    ) {
    }
}
