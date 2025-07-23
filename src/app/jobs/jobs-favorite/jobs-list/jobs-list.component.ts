import {Component, inject} from '@angular/core';
import {JobComponent} from "src/app/jobs/jobs-favorite/job/job.component";
import {JobWithFavorite} from "src/app/jobs/jobs-favorite/model/job-favorite.model";
import {JobFavoriteService} from "src/app/jobs/jobs-favorite/service/job-favorite.service";

@Component({
  selector: 'app-jobs-list',
  standalone: true,
  imports: [
    JobComponent,
  ],
  templateUrl: './jobs-list.component.html',
  styleUrl: './jobs-list.component.css'
})
export class JobsListComponent {
  private readonly jobsService = inject(JobFavoriteService);
  jobs = this.jobsService.jobsWithFavorite;

  /**
   * Toggle the favorite status of a job.
   * @param job
   */
  onToggleFavorite(job: JobWithFavorite) {
    this.jobsService.toggleFavorite(job);
  }

}
