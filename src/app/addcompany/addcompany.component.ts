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
  start:Date | undefined;
  exchanges:Array<any> = ["BSE","NSE"];

  constructor(
    private _companyservice: CompanyService,
    private route: ActivatedRoute,
    private routes: Router,
    private _stockservice: StockService,
    public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.params['companycode']);
    this.companycode = this.route.snapshot.params['companycode'];
    this.registerCompany();
    this.stocks();


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


  }
  addItems() {
    console.log('step')
    let item:any;
    this._stockservice.emptystock().subscribe(
      (data) => {
         item = data;
         item.companyCode=this.company.companyCode;
        this.stockpricedetails.push(item);
      },
      (error) => {
        console.log('httperror:');
        console.log(error);
      }
    );


  }
  removeItem(index: number) {
    this.stockpricedetails.splice(index, 1); // remove 1 item at ith place
  }
  cancel() {
    this.routes.navigateByUrl('/companylist');
  }
  submit() {
    // console.log(this.flightBooking);
    this.userset();
    this._companyservice.savecompany(this.company).subscribe(
      (res) => {
        console.log('Issue added!');
        this.routes.navigateByUrl("/companylist");
      },
      (error) => {
        console.log('httperror:');
        console.log(error);
      }
    );
    this._stockservice.savestocks(this.stockpricedetails).subscribe(
      (res) => {
        console.log('Issue added!');
        //  this.routes.navigateByUrl("/manage-history");
      },
      (error) => {
        console.log('httperror:');
        console.log(error);
      }
    );
  }
  stocks()
  {
    this._stockservice.getstock(this.companycode).subscribe(
      (data) => {
        this.stockpricedetails = data;

      },
      (error) => {
        console.log('httperror:');
        console.log(error);
      }
    );
  }

  userset()
  {
    console.log('hai');
    console.log(this.company.isAdd);
      if(this.company.isAdd!=false)
      {
        console.log(localStorage.getItem('userName'));
        this.company.userName=localStorage.getItem('userName');
      }
  }
}
