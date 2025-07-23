import {inject, Injectable} from '@angular/core';
import {StorageService} from "src/app/service/storage.service";

@Injectable({
  providedIn: 'root'
})
export class StorageJobFavoriteService {
  private readonly storageService = inject(StorageService);
  private readonly favoriteJobs = 'favoriteJobs';

  /**
   * Set the list of favorite job IDs in storage service.
   * @param favoriteJobs
   */
  setFavoriteIdJobs(favoriteJobs: number[]) {
    this.storageService.setItem(this.favoriteJobs, favoriteJobs);
  }

  /**
   * Get the list of favorite job IDs from the storage service.
   */
  getFavoriteIdJobs() : number[] {
    return this.storageService.getItem<number[]>(this.favoriteJobs) ?? [];
  }
}
