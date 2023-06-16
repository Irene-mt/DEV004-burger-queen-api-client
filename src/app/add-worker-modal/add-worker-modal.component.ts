import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-worker-modal',
  templateUrl: './add-worker-modal.component.html',
  styleUrls: ['./add-worker-modal.component.css']
})
export class AddWorkerModalComponent {
  workerForm!: FormGroup;
  messageConfirm!: string;

  constructor(
    private fb: FormBuilder,
    public users: UsersService,
  ) { }

  ngOnInit() {
    this.workerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    })
  }

  addWorker() {
    this.users.createUser(this.workerForm.value)
      .subscribe(
        (res) => {
          console.log(res);
          this.messageConfirm = 'User created!'
          setTimeout(() => {
            location.reload();
          }, 2000);

        }),
      (err: Error) => {
        console.log(err);
        this.messageConfirm = 'Something went wrong!';
        this.ngOnInit();
      }

  }

}
