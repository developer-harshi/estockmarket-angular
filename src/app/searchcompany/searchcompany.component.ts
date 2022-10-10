import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-searchcompany',
  templateUrl: './searchcompany.component.html',
  styleUrls: ['./searchcompany.component.css']
})
export class SearchcompanyComponent implements OnInit {
  stockpricedetails: Array<any> = [];
  companycode: any;
  company: any;
  companyList:any;

  constructor(private _companyService:CompanyService,
    private routes: Router,private route: ActivatedRoute,private _stockService:StockService,) { }

  ngOnInit(): void {
    this._companyService.getcompanylist().subscribe(
      data => {
          this.companyList = data;
          console.log(data);
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );
  }
  removeItem(id:any)
  {
    this._stockService.deletestock(id).subscribe(
      data => {

          console.log(data);
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );

  }
  search(companyCode:any,startDate:any,endDate:any)
  {
    this._stockService.fetchstock(companyCode,startDate,endDate).subscribe(
      data => {

        this.stockpricedetails=data;
          console.log(data);
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );

  }
}
