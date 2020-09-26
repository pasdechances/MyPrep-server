import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  @Output() eventUser = new EventEmitter<string>()
  hide = true;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  } 

  onSubmit(event: any) {
    var user = new Users

    user.firstname = event.target.firstname.value
    user.lastname = event.target.lastname.value
    user.login = event.target.login.value
    user.password = event.target.password.value

    this.newUser(user)
    return 
  }

  newUser(user : object){
    this.userService.createUser(user).subscribe((value) => {
        console.log(value);
    }, (error) => {
        console.log(error);
    }, () => {
        this.eventUser.emit()
    });
  }

}

export class Users {
  firstname: String;
  lastname: String;
  login: String;
  password: String;
}