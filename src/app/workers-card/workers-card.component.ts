import { Component, Input } from '@angular/core';
import { Worker } from '../interfaces/worker';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-workers-card',
  templateUrl: './workers-card.component.html',
  styleUrls: ['./workers-card.component.css']
})
export class WorkersCardComponent {
  @Input() AllWorkers: Worker[] = [];


  constructor(
    private user: UsersService,
  ) { }


  deleteUser(uid: number) {
    this.user.deleteUser(uid).subscribe(
      (res) => {
        console.log(res);
        
        location.reload();
      },
      (err) => {
        console.log(err);

      }
    )
  }
}
