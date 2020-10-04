import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
 
  eventsUser: Subject<void> = new Subject<void>();

  constructor() {}

  ngOnInit() {}

  pass(){
    this.eventsUser.next();
  }

}
