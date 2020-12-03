import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-patients',
  templateUrl: './form-patients.component.html',
  styleUrls: ['./form-patients.component.scss']
})
export class FormPatientsComponent implements OnInit {

  dPY = "année en premier";

  constructor() { }

  ngOnInit(): void {
  }

}
