import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  companyCode: any;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  logout() {
    console.log('logout');
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
  search(companyCode: any) {
    console.log(companyCode);

    this.router.navigateByUrl(('/search/'+companyCode)+"/''/''");


  }
}
