import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  eventsUser: Subject<void> = new Subject<void>();

  constructor() {}

  ngOnInit() {}

  pass(){
    this.eventsUser.next();
  }
}
