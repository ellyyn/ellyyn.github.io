import {HttpClientTestingModule} from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsFavoriteListComponent } from 'src/app/jobs/jobs-favorite/jobs-favorite-list/jobs-favorite-list.component';

describe('FavoriteJobsListComponent', () => {
  let component: JobsFavoriteListComponent;
  let fixture: ComponentFixture<JobsFavoriteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsFavoriteListComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsFavoriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
