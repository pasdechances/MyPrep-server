import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.scss']
})
export class FormUserComponent implements OnInit {

  @Output() loader = new EventEmitter<string>()
  hide = true;

  constructor() { }

  ngOnInit(): void {
  } 


  changeOutput(){
    this.loader.emit()
  }

}
