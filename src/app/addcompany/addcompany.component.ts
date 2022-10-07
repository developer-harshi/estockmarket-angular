import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { StockService } from '../services/stock.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css'],
})
export class AddcompanyComponent implements OnInit {
  stockpricedetails: Array<any> = [];
  companycode: any;
  company: any;
  newItem: any;


  constructor(
    private _companyservice: CompanyService,
    private route: ActivatedRoute,
    private routes: Router,
    private _stockservice: StockService,public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.registerCompany();
  }
  registerCompany() {
    this._companyservice.getcompany(this.companycode).subscribe(
      (data) => {
        this.company = data;
        console.log(this.company);
      },
      (error) => {
        console.log('httperror:');
        console.log(error);
      }
    );
    this._stockservice.emptystock().subscribe(
      (data) => {
        this.newItem = data;
        console.log(this.newItem);
      },
      (error) => {
        console.log('httperror:');
        console.log(error);
      }
    );
  }
  addItems() {
    this.newItem.startDate=this.datepipe.transform((new Date), 'dd-MM-YYYY h:mm:ss');
    this.newItem.companyCode=this.company.companyCode;
    console.log(this.newItem);

    this.stockpricedetails.push(this.newItem);
    // this.newItem = {};
  }
  removeItem(index: number) {
    this.stockpricedetails.splice(index, 1); // remove 1 item at ith place
  }
  cancel()
  {
    this.routes.navigateByUrl("/search-flight");



  }
  submit()
  {
    // console.log(this.flightBooking);

    this._companyservice.savecompany(this.company).subscribe((res) => {
      console.log('Issue added!');
      //  this.routes.navigateByUrl("/manage-history");
    }
    , error => {
      console.log('httperror:');
      console.log(error);
  }
    );
    this._stockservice.savestocks(this.stockpricedetails).subscribe((res) => {
      console.log('Issue added!');
      //  this.routes.navigateByUrl("/manage-history");
    }
    , error => {
      console.log('httperror:');
      console.log(error);
  }
    );

  }
}
