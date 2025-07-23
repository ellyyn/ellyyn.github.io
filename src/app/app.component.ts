import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderJobComponent} from "src/app/jobs/header-job/header-job.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderJobComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-job-search';
}
