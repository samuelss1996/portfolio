import {TestBed} from '@angular/core/testing';

import {DocumentService} from './document.service';
import {HttpClientModule} from '@angular/common/http';

describe('DocumentService', () => {
    let service: DocumentService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule]
        });
        service = TestBed.inject(DocumentService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get all documents', done => {
        service.getDocuments().subscribe(result => {
            expect(result.status).toBe(200);
            const documents = result.data;

            expect(documents.length).toBeGreaterThan(0);
            expect(documents[0].documents).not.toBe(undefined);
            expect(documents[0].documents.length).toBeGreaterThan(0);

            done();
        }, error => {
            fail();
            done();
        });
    });
});
