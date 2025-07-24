import {Component, computed, inject} from '@angular/core';
import {JobComponent} from "src/app/jobs/jobs-favorite/job/job.component";
import {JobFavoriteService} from "src/app/jobs/jobs-favorite/service/job-favorite.service";

@Component({
  selector: 'app-favorite-jobs-list',
  standalone: true,
  imports: [
    JobComponent
  ],
  templateUrl: './jobs-favorite-list.component.html',
  styleUrl: './jobs-favorite-list.component.scss'
})
export class JobsFavoriteListComponent {
  private readonly jobsService = inject(JobFavoriteService);
  favoriteJobs = computed(() => this.jobsService.jobsWithFavorite().filter(job => job.favorite));
}
