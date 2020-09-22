import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loaderStatus = false

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.loaderStatus = true;
    console.log('test')
    this.userService.getUsers().subscribe((responseBody) => {
      console.log(responseBody);
      this.loaderStatus = false;
    });
  }

  
}
