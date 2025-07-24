import {HttpClientTestingModule} from "@angular/common/http/testing";
import { TestBed } from '@angular/core/testing';

import { JobApiService } from './job-api.service';

describe('JobApiService', () => {
  let service: JobApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(JobApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
