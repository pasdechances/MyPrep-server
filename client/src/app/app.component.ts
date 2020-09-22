import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  loaderStatus : String

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    console.log('test')
    this.userService.getUsers().subscribe((responseBody) => {
      console.log(responseBody);
    });
  }

  toggleLoader(){
    if(this.loaderStatus == "indeterminate")this.loaderStatus ="determinate";
    else this.loaderStatus = "indeterminate"
  }
  
}
