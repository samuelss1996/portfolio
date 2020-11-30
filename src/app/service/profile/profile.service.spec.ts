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
           expect(result.data.name).toBe('Samuel');
           done();
        }, error => {
            fail();
        });
    });

    it('should get experience', (done) => {
        service.getExperience().subscribe(result => {
            expect(result.status).toBe(200);
            expect(result.data.length).toBeGreaterThan(0);
            expect(result.data[0].position).not.toBe(undefined);

            done();
        }, error => {
            fail();
        });
    });

    it('should get skills', (done) => {
        service.getSkills().subscribe(result => {
            expect(result.status).toBe(200);
            expect(result.data.length).toBeGreaterThan(0);
            expect(result.data[0].items).not.toBe(undefined);
            expect(result.data[0].items.length).toBeGreaterThan(0);

            done();
        }, error => {
            fail();
        });
    });
});
