import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';
import { Worker } from '../interfaces/worker';

@Component({
  selector: 'app-edit-worker-modal',
  templateUrl: './edit-worker-modal.component.html',
  styleUrls: ['./edit-worker-modal.component.css']
})
export class EditWorkerModalComponent {
  @Input() workerId!: number;
  @Output() hideEdit = new EventEmitter<boolean>();
  workerForm!: FormGroup;
  messageConfirm!: string;
  userInfo!: Worker;

  constructor(
    private fb: FormBuilder,
    private user: UsersService,
  ) {
    this.workerForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
      role: new FormControl()
    })
  }

  ngOnInit() {
    this.user.getUser(this.workerId).subscribe((user) => {
      this.userInfo = user;
      this.createForm();
    })
  }

  createForm() {
    this.workerForm = this.fb.group({
      email: [this.userInfo.email, Validators.required],
      password: [this.userInfo.password, Validators.required],
      role: [this.userInfo.role, Validators.required]
    })
  }

  editWorker() {
    this.user.editUser(this.userInfo.id, this.workerForm.value)
      .subscribe(
        (res) => {
          location.reload();
        }),
      (err: Error) => {
        console.log(err);
        this.ngOnInit();
      }

  }

  cancelEdit() {
    this.hideEdit.emit(false)
  }

}
