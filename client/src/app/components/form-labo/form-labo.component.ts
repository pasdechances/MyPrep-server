import {Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { HistoryService } from '../../services/history.service';
//AfterViewInit
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }




// const ELEMENT_DATA: History[] = [
//   {date: '15/12/2020', userId: 'henrinator', event: 'connexion à l application', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'deconnexion à l application', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'connexion à l application', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'deconnexion à l application', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'connexion à l application', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'a rage quit', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'supprimer un user', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'ludo', event: 'créer un user', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'a créer un laboratoire', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'a effacer toutes les données', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'à tout recréé', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'deconnexion à l application', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'a créé un médicament', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'effacer le médicament', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'attribue un compte', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'connexion à l application', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'deconnexion à l application', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'connexion à l application', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'deconnexion à l application', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'connexion à l application', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'deconnexion à l application', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'a créé un médicament', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'effacer le médicament', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'attribue un compte', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'connexion à l application', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'deconnexion à l application', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'connexion à l application', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'deconnexion à l application', info: 'H', ip: '10.2.12.42'},
//   {date: '15/12/2020', userId: 'henrinator', event: 'connexion à l application', info: 'H', ip: '10.2.12.42'},

// ];

@Component({
  selector: 'app-form-labo',
  templateUrl: './form-labo.component.html',
  styleUrls: ['./form-labo.component.scss']
})
export class FormLaboComponent implements OnInit {

  displayedColumns: string[] = ['date', 'userId', 'event', 'info', 'ip'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(
    private historyService: HistoryService
    ) { }

  // ngAfterViewInit() {
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }


  applyFilter(event: Event) {
    console.log(event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.getHistory();
    //this.eventsHistory.subscribe(() => this.getHistory());
  }

  getHistory(){
    //this.loaderStatus = true;
    this.historyService.getHistories().subscribe((responseBody : History[]) => { 
        //this.loaderStatus = false;
        this.dataSource = new MatTableDataSource(responseBody);
        //this.dataSource = responseBody;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    });
  }

}
