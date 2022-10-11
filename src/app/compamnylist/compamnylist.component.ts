import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../services/company.service';

@Component({
  selector: 'app-compamnylist',
  templateUrl: './compamnylist.component.html',
  styleUrls: ['./compamnylist.component.css']
})
export class CompamnylistComponent implements OnInit {

  companylist:any;
  constructor(private _companyService:CompanyService,
    private routes: Router,private route: ActivatedRoute,) { }

  ngOnInit(): void {

    this._companyService.getcompanylist().subscribe(
      data => {
          this.companylist = data;
          console.log(data);
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );

  }
  Delete(companyCode:any)
  {
    this._companyService.deletecompany(companyCode).subscribe(
      data => {
          console.log(data);
          this.ngOnInit();
      }, error => {
          console.log('httperror:');
          console.log(error);
      }
  );


  }
  View(companyCode:any)
  {

  }

}
