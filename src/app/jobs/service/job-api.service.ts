import {HttpClient} from "@angular/common/http";
import {inject, Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {JobDetail} from "src/app/jobs/job-detail/model/job-detail.model";
import {Job} from "src/app/jobs/model/job.model";

@Injectable({
  providedIn: 'root'
})
export class JobApiService {
  private readonly http = inject(HttpClient);

  /**
   * Fetches the list of jobs from the API.
   */
  public getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>('/jobs');
  }

  /**
   * Fetches the details of a specific job by its ID
   * if the jobId is not provided, it returns an empty observable.
   * @param jobId
   */
  public getJobDetail(jobId: number): Observable<JobDetail> {
    if(!jobId) return of()
    return this.http.get<JobDetail>(`/jobs/${jobId}`);
  }
}
