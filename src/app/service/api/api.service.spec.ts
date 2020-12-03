import {TestBed} from '@angular/core/testing';

import {APIService} from './api.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

describe('APIService', () => {
    let service: APIService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule]
        });
        service = TestBed.inject(APIService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return api method not found', (done) => {
        service.get('wrongUrl').subscribe(result => {
            fail();
            done();
        }, error => {
            expect(error.status).toBe(404);
            done();
        });
    });
});
