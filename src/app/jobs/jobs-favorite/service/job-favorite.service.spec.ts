import {HttpClientTestingModule} from "@angular/common/http/testing";
import { TestBed } from '@angular/core/testing';

import { JobFavoriteService } from 'src/app/jobs/jobs-favorite/service/job-favorite.service';

describe('JobService', () => {
  let service: JobFavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(JobFavoriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
