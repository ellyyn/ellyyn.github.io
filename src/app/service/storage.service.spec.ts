import { TestBed } from '@angular/core/testing';

import { StorageService } from 'src/app/service/storage.service';

describe('StoreService', () => {
  let service: StorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
