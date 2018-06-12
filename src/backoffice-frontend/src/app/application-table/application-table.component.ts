import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GetApplicationRowsService } from '../services/get-application-rows.service';
import { ApplicationRow } from '../models/application-row.model';
import { ApplicationRowPage } from '../models/application-row-page.model';
import { Router } from "@angular/router";


@Component({
  selector: 'app-application-table',
  templateUrl: './application-table.component.html',
  styleUrls: ['./application-table.component.css']
})
export class ApplicationTableComponent implements OnInit {

  @Input() application: ApplicationRow;


  private curPage: number = 0;
  private pageSize: number = 5;

  private page: ApplicationRowPage = null;

  private lastPage: boolean = false;
  private firstPage: boolean = true; 

 

 private pageCorrente: any = 1;
 private previousPage: any;

 constructor(private router: Router, private getApplicationRowsService: GetApplicationRowsService) { }

  ngOnInit() {
   
    this.getApplicationRowsService.getRows(this.curPage * this.pageSize, this.pageSize)
      .subscribe(page => {
        this.page = page;
        if ((this.curPage + this.pageSize >= this.page.totalCount) || (this.page.totalCount == 0)) {
          this.lastPage = true;
        }
        else
          this.lastPage = false;
      });
      console.log("oninit", this.curPage);
      console.log("oninit", this.pageSize);
  }


  private loadPage(pageCorrente : number) {
    // console.log(pageCorrente);
    if (pageCorrente !== this.previousPage) {
      
      this.previousPage = pageCorrente;
      this.loadData();
    }


  }

   private loadData() {
     
    this.curPage = this.curPage + this.pageSize;
    
    console.log("loadData this.curPage",this.curPage);
    console.log("loadData this.pageSize",this.pageSize);
    this.getApplicationRowsService.getRows(this.curPage, this.pageSize)
    .subscribe(page => this.page = page); 
  }

   /*    this.dataService.query({
        page: this.page - 1,
        size: this.itemsPerPage,
      }).subscribe(
        (res: Response) => this.onSuccess(res.json(), res.headers),
        (res: Response) => this.onError(res.json())
        ) */
    
   /*  this.curPage = this.curPage + this.pageSize;
    // this.numberPage = this.numberPage + 1;
    console.log(this.curPage);
    this.getApplicationRowsService.getRows(this.curPage, this.pageSize)
      .subscribe(page => this.page = page);
      
    if ((this.curPage + this.pageSize >= this.page.totalCount) || (this.page.totalCount == 0)) {
      this.lastPage = true;
      this.firstPage = false;
    }
    else
      this.firstPage = false;
 */
      
  private mostraApplication(row: ApplicationRow) {
    console.log(row);
    this.router.navigate(['/application-detail', row.id]);
  }

}



