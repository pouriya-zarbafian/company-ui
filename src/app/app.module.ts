import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { HttpModule, RequestOptions } from '@angular/http';
import { AuthRequestOptions } from './services/AuthRequestOptions';

import { CompanyMaterialModule } from './company-material/company-material.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CompaniesService } from './services/companies.service';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyEditComponent } from './company-edit/company-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    CompanyMaterialModule,
    AppRoutingModule
  ],
  providers: [
    CompaniesService,
    { provide: RequestOptions, useClass: AuthRequestOptions }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
