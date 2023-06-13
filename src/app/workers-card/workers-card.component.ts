import { Component, Input } from '@angular/core';
import { Worker } from '../interfaces/worker';

@Component({
  selector: 'app-workers-card',
  templateUrl: './workers-card.component.html',
  styleUrls: ['./workers-card.component.css']
})
export class WorkersCardComponent {
  @Input() AllWorkers:  Worker[]= [];

}
