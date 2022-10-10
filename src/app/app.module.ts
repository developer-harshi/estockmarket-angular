import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { MessageService } from './message.service';
import { DatePipe } from '@angular/common';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AddcompanyComponent } from './addcompany/addcompany.component';
import { CompamnylistComponent } from './compamnylist/compamnylist.component';
import { SearchcompanyComponent } from './searchcompany/searchcompany.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddcompanyComponent,
    CompamnylistComponent,
    SearchcompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    HttpErrorHandler,
    MessageService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
