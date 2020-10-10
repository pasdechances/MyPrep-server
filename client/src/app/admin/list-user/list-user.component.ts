import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  @Input() eventsUser: Observable<void>;
  
  loaderStatus = false
  displayedColumns: string[] = ['lastname', 'firstname', 'login', 'password'];
  dataSource: any

  constructor(
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.getUser()
    this.eventsUser.subscribe(() => this.getUser());
  }

  getUser(){
    this.loaderStatus = true;
    this.userService.getUsers().subscribe((responseBody) => { 
        console.log(responseBody[0]);
        this.loaderStatus = false;
        this.dataSource = responseBody;
    });
  }

}

export interface User{
  lastname: string;
  firstname: number;
  login: number;
  password: string;
}

