import { Routes } from '@angular/router';
import {JobDetailComponent} from "src/app/jobs/job-detail/job-detail.component";
import {JobsFavoriteListComponent} from "src/app/jobs/jobs-favorite/jobs-favorite-list/jobs-favorite-list.component";
import {JobsListComponent} from "src/app/jobs/jobs-favorite/jobs-list/jobs-list.component";

export const routes: Routes = [
  {
    path: 'jobs',
    title: 'Jobs',
    component: JobsListComponent
  },
  {
    path: 'favorite-jobs',
    title: 'Favorite jobs',
    component: JobsFavoriteListComponent
  },
  {
    path: 'jobs/:id',
    title: 'Job',
    component: JobDetailComponent
  },
  { path: '**', component: JobsListComponent}
];
