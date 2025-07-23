import {NgOptimizedImage} from "@angular/common";
import {Component, input, InputSignal} from '@angular/core';
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
  styleUrl: './job.component.css'
})
export class JobComponent {
  job: InputSignal<Job> = input.required();
}
