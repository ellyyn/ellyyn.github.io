import {NgOptimizedImage} from "@angular/common";
import {Component, input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {Job} from "src/app/jobs/model/job.model";

@Component({
  selector: 'app-job',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink
  ],
  templateUrl: './job.component.html',
  styleUrl: './job.component.scss'
})
export class JobComponent {
  job = input.required<Job>();
}
