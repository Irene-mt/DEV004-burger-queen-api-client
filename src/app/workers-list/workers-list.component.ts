import { Component, Input } from '@angular/core';
import { Worker } from '../interfaces/worker';
import { UsersService } from '../services/users.service';
import { AuthLoginService } from '../services/auth-login.service';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent {
  // allWorkers: Array<Worker> = [{
  //   id: 0,
  //   email: '',
  //   role: '',
  //   password: '',
  // }];

  filteredWorkers: Worker[] = [];
  btnActive: string = '';
  errorMessage: string = '';

  constructor(
    private logService: AuthLoginService,
    public users: UsersService,
  ) { }

  // ngOnInit(): void {
  //   this.users.getAllUsers().subscribe((response) => {
  //     console.log(response);
  //   });
  // }

  showSelectedWorkers(role: string) {
    this.btnActive = role;
    this.users.getAllUsers().subscribe({
      next: res => {
        const workers: Worker[] = <Worker[]>res;
        this.filteredWorkers = workers.filter((eachWorker) => {
              return eachWorker.role === role;
            })
            console.log(this.filteredWorkers);
            
        return this.filteredWorkers
      },
      
    error: err=>this.errorMessage = err
    }
      
    )
  }



  logOut() {
    this.logService.logout();
  }

}

// (res) => {
//   console.log(res);

//   //this.allWorkers = users;
//   this.filteredWorkers = this.allWorkers.filter((eachWorker) => {
//     console.log(eachWorker);
    
//     return eachWorker.role === role;
//   })
// }