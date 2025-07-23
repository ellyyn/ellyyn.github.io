import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header-job',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header-job.component.html',
  styleUrl: './header-job.component.css'
})
export class HeaderJobComponent {

}
