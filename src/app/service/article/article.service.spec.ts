import {TestBed} from '@angular/core/testing';

import {ArticleService} from './article.service';
import {HttpClientModule} from '@angular/common/http';
import {Article} from '../../model/Article';


function testArticlesByCategory(service: ArticleService, categories: string[], done: DoneFn): void {
    service.getArticlesByCategory(categories).subscribe(result => {
        expect(result.status).toBe(200);

        const articles: Article[] = result.data;
        expect(articles.length).toBeGreaterThan(0);

        for (const article of articles) {
            expect(categories).toContain(article.category);
        }

        done();
    }, error => {
        fail();
    });
}

describe('ArticleService', () => {
    let service: ArticleService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule]
        });
        service = TestBed.inject(ArticleService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get a few articles by one category', done => {
        testArticlesByCategory(service, ['videogame'], done);
    });

    it('should get a few articles by multiple categories', done => {
        testArticlesByCategory(service, ['web', 'activity'], done);
    });

    it('should get article by id', done => {
        service.getArticleById('5fb3fe6957a016937b36de91').subscribe(result => {
            expect(result.status).toBe(200);
            const article: Article = result.data;

            expect(article._id).not.toBe(undefined);

            expect(article.external_links.length).toBeGreaterThan(0);
            expect(article.external_links[0].icon).not.toBe(undefined);
            expect(article.external_links[0].url).not.toBe(undefined);

            done();
        }, error => {
            fail();
        });
    });
});
