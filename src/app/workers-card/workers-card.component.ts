import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Worker } from '../interfaces/worker';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-workers-card',
  templateUrl: './workers-card.component.html',
  styleUrls: ['./workers-card.component.css']
})
export class WorkersCardComponent {
  @Input() AllWorkers: Worker[] = [];
  @Output() showEdit = new EventEmitter<boolean>();
  @Output() workerId = new EventEmitter<number>();
  modalConfirmDelete: boolean = false;
  selectedWorker!: any;


  constructor(
    private user: UsersService,
  ) { }

  showEditModal(workerId: number) {
    this.workerId.emit(workerId)
    this.showEdit.emit(true)
  }

  selectWorker(workerId: number) {
    this.selectedWorker = workerId;
  }

  noSelectWorker() {
    this.selectedWorker = null;
  }

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
