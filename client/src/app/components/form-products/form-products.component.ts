import { Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-form-products',
  templateUrl: './form-products.component.html',
  styleUrls: ['./form-products.component.scss'], 
})

export class FormProductsComponent implements OnInit  {

  isGenerique = false;
  dPC = "classique";
  dPM = "mois-année";
  listGeneriques: string[] = ['GenOne', 'GenTwo', 'GenThree','Genfour','Genfive','Gensix','Genseven'];
  generiques = new FormControl();
  filteredGeneriques: Observable<string[]>;
  
  listLabos: string[] = ['LabOne', 'LabTwo', 'LabThree','Labfour','Labfive','Labsix','Labseven'];
  labos = new FormControl();
  filteredLabos: Observable<string[]>;

  constructor() {
  }

  ngOnInit(): void {
    this.filteredGeneriques = this.generiques.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value,this.listGeneriques))
    );
    this.filteredLabos = this.labos.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value,this.listLabos))
    );
  }

  private _filter(value: string,list: string[]): string[] {
    if(value.length > 2){
      const filterValue = value.toLowerCase();
      return list.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
      }
  }
}




