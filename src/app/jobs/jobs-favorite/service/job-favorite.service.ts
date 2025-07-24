import {computed, effect, inject, Injectable, signal} from '@angular/core';
import {toSignal} from "@angular/core/rxjs-interop";
import {JobWithFavorite} from "src/app/jobs/jobs-favorite/model/job-favorite.model";
import {Job} from "src/app/jobs/model/job.model";
import {JobApiService} from "src/app/jobs/service/job-api.service";
import {StorageJobFavoriteService} from "src/app/jobs/jobs-favorite/service/storage-job-favorite.service";

@Injectable({
  providedIn: 'root'
})
export class JobFavoriteService {
  private readonly jobsApiService = inject(JobApiService);
  private readonly localStorageJobFavoriteService = inject(StorageJobFavoriteService);

  private readonly favoriteIdJobs = signal(this.localStorageJobFavoriteService.getFavoriteIdJobs());

  private readonly jobs =  toSignal(this.jobsApiService.getJobs(), {initialValue: []});

  /**
   * Create a list of jobs with the favorite status of the user.
   */
  jobsWithFavorite = computed(() =>
    this.jobs().map((job) =>
      {
        const isFavorite = this.favoriteIdJobs().includes(job.id);
        return this.mapJobWithFavorite(job, isFavorite);
      })
  );

  private readonly updateLocalStorageFavoriteIdJobs = effect(() =>
    this.localStorageJobFavoriteService.setFavoriteIdJobs(this.favoriteIdJobs())
  );

  /**
   * Toggle the favorite status of a job.
   * If the job is already a favorite, it will be removed from favorites else it will be added.
   * Changes are persisted in local storage.
   * @param job
   */
  toggleFavorite(job: JobWithFavorite): void {
    let updatedFavoriteIdJobs : number[];
    if(job.favorite) {
      updatedFavoriteIdJobs = this.favoriteIdJobs().filter(idJob => idJob !== job.id);
    } else {
      updatedFavoriteIdJobs = [...this.favoriteIdJobs(), job.id];
    }
    this.favoriteIdJobs.set(updatedFavoriteIdJobs);
  }

  /**
   * Maps a Job to a JobWithFavorite object.
   * @param job
   * @param isFavorite
   */
  mapJobWithFavorite (job: Job, isFavorite: boolean = false): JobWithFavorite {
    return {
      ...job,
      favorite: isFavorite
    };
  }
}
