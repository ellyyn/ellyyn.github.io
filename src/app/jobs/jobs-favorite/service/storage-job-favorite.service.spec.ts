import { TestBed } from '@angular/core/testing';
import {StorageJobFavoriteService} from "src/app/jobs/jobs-favorite/service/storage-job-favorite.service";


describe('StorageJobFavoriteService', () => {
  let service: StorageJobFavoriteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageJobFavoriteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
