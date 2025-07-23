import {DatePipe, NgOptimizedImage} from "@angular/common";
import {Component, inject} from '@angular/core';
import {toSignal} from "@angular/core/rxjs-interop";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {map, switchMap} from "rxjs";
import {JobApiService} from "src/app/jobs/service/job-api.service";

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    DatePipe
  ],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent {
  private readonly jobsApiService = inject(JobApiService);
  private readonly activatedRoute = inject(ActivatedRoute);


  /**
   * Signal to hold the job detail from the id in the route parameters.
   */
  jobDetail = toSignal(
    this.activatedRoute.params.pipe(map(params => params['id']))
      .pipe(switchMap((jobId:number) => this.jobsApiService.getJobDetail(jobId))),
    {initialValue: undefined}
  );

}
