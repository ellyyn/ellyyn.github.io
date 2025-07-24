import {HttpClientTestingModule} from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {ActivatedRoute} from "@angular/router";
import {of} from "rxjs";

import { JobDetailComponent } from './job-detail.component';

describe('JobDetailComponent', () => {
  let component: JobDetailComponent;
  let fixture: ComponentFixture<JobDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobDetailComponent, HttpClientTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: {params: of({ id: 1 })} }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
