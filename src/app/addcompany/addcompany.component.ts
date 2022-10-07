import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcompany',
  templateUrl: './addcompany.component.html',
  styleUrls: ['./addcompany.component.css']
})
export class AddcompanyComponent implements OnInit {

stockpricedetails:Array<any>=[];


  constructor() { }

  ngOnInit(): void {
  }

}
