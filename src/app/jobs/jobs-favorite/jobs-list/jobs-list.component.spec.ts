import {HttpClientTestingModule} from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsListComponent } from 'src/app/jobs/jobs-favorite/jobs-list/jobs-list.component';

describe('JobsListComponent', () => {
  let component: JobsListComponent;
  let fixture: ComponentFixture<JobsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobsListComponent, HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
