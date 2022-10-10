import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { CompamnylistComponent } from './compamnylist/compamnylist.component';
import { SearchcompanyComponent } from './searchcompany/searchcompany.component';
const routes: Routes = [
  {path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'addcompany/:companycode', component: AddcompanyComponent },
  { path: 'companylist', component:CompamnylistComponent},
  { path: 'search/:companyCode/:startdate/:enddate', component:SearchcompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
