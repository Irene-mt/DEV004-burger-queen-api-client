import { Component } from '@angular/core';
import { Worker } from '../interfaces/worker';
import { UsersService } from '../services/users.service';
import { AuthLoginService } from '../services/auth-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})

export class WorkersListComponent {
  filteredWorkers: Worker[] = [];
  btnActive: string = '';
  errorMessage: string = '';
  showAddWorker: boolean = true;
  showEditWorker!: boolean;
  workerId!: number;

  constructor(
    private logService: AuthLoginService,
    public users: UsersService,
    private router: Router,
  ) { }

  modalToShow(booleanValue: boolean){
    this.showEditWorker = booleanValue;
    this.showAddWorker = false;
  }

  modalToHide(booleanValue:any){
    this.showEditWorker = booleanValue;
    this.showAddWorker = true;
  }

  workerToEdit(id: number){
    this.workerId = id;
  }

  showSelectedWorkers(role: string) {
    this.btnActive = role;
    this.users.getAllUsers().subscribe({
      next: res => {
        const workers: Worker[] = <Worker[]>res;
        this.filteredWorkers = workers.filter((eachWorker) => {
              return eachWorker.role === role;
            })
        return this.filteredWorkers
      },
    error: err=>this.errorMessage = err
    })
  }

  navigateProducts(){
    this.router.navigate(['/products-list']);
  }

  logOut() {
    this.logService.logout();
  }

}
