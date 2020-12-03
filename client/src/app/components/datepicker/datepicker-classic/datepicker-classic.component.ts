import { Component, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {default as _rollupMoment, Moment} from 'moment';
const moment = _rollupMoment || _moment;


@Component({
  selector: 'app-datepicker-classic',
  templateUrl: './datepicker-classic.component.html',
  styleUrls: ['./datepicker-classic.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-Fr'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})

export class DatepickerClassicComponent {
  @Input('name') DatePickerName : string;
  date = new FormControl(moment());
}
