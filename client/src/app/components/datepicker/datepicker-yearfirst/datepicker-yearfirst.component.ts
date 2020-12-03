import { Component, Input } from '@angular/core';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-datepicker-yearfirst',
  templateUrl: './datepicker-yearfirst.component.html',
  styleUrls: ['./datepicker-yearfirst.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-Fr'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
  inputs: ['DatePickerName'],
})

export class DatepickerYearfirstComponent {
  @Input('name') DatePickerName : string;
}
