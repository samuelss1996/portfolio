import {TestBed} from '@angular/core/testing';

import {ProfileService} from './profile.service';
import {HttpClientModule} from '@angular/common/http';

describe('ProfileService', () => {
    let service: ProfileService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule]
        });
        service = TestBed.inject(ProfileService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get about', (done) => {
        service.getAbout().subscribe(result => {
           expect(result.status).toBe(200);
           done();
        }, error => {
            fail();
        });
    });

    it('should get experience', (done) => {
        service.getExperience().subscribe(result => {
            expect(result.status).toBe(200);
            done();
        }, error => {
            fail();
        });
    });

    it('should get skills', (done) => {
        service.getSkills().subscribe(result => {
            expect(result.status).toBe(200);
            done();
        }, error => {
            fail();
        });
    });
});
