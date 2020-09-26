import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  
  @Output() eventUser = new EventEmitter<string>()
  hide = true;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar
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
    this.userService.createUser(user).subscribe((value : value) => {
        this.openSB(value.message)
        this.eventUser.emit()
    }, (error) => {
        this.openSB("une erreur est survenue")
        console.log(error)
    });
  }

  openSB(message){
    this.snackBar.open(message)
  }

}

export class Users {
  firstname: String;
  lastname: String;
  login: String;
  password: String;
}

export class value {
  message: String;
}
