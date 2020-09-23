import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.scss']
})
export class ListeUserComponent implements OnInit {

  loaderStatus = false
  displayedColumns: string[] = ['lastname', 'firstname', 'login', 'password'];
  dataSource: any

  constructor(
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.getUser()
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

