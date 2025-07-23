import {input} from "@angular/core";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ActivatedRoute} from "@angular/router";

import { JobComponent } from 'src/app/jobs/jobs-favorite/job/job.component';

describe('JobComponent', () => {
  let component: JobComponent;
  let fixture: ComponentFixture<JobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobComponent],
      providers: [
        { provide: ActivatedRoute, useValue: {} }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobComponent);
    component = fixture.componentInstance;
    component.job = input({
      id: 1,
      title: 'title',
      companyName: 'name',
      companyLogo: 'logo.png',
      reference: 'ref123',
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
