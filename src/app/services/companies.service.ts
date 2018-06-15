import { Injectable } from '@angular/core';

import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Company } from '../data/Company';

@Injectable()
export class CompaniesService {

  constructor(private http: Http) { }

  listAll(): Observable<Company[]> {

    console.log('CompaniesService.listAll');

    return this.http
      .get(
      '/api/companies'
      )
      .map(
      resp => resp.json()
      );
  }

  loadCompany(id: number): Observable<Company> {

    console.log('CompaniesService.loadCompany');

    return this.http
      .get(
        '/api/companies/' + id 
      )
      .map(
      resp => resp.json()
      );
  }

  createCompany(company: Company): Observable<Company> {

    console.log('CompaniesService.createCompany: ' + Company.name);

    return this.http
      .post('/api/companies', company)
      .map(
      resp => {
        if (resp.status == 201) {
          return resp.json();
        }
        else {
          throw new Error(resp.statusText);
        }
      });
  }

  updateCompany(company: Company): Observable<Company> {

    console.log('CompaniesService.updateCompany: ' + company.id + '.' + company.name);

    return this.http
      .put(
        '/api/companies/' + company.id, company
      )
      .map(
      resp => {
        if (resp.status == 200) {
          return resp.json();
        }
        else {
          throw new Error(resp.statusText);
        }
      });
  }

  deleteCompany(companyId: number) {

    console.log('CompaniesService.deleteCompany: ' + companyId);

    return this.http
      .delete(
        '/api/companies/' + companyId
      )
      .map(
      resp => {
        if (resp.status == 204) {
          return;
        }
        else {
          throw new Error(resp.statusText);
        }
      });
  }
}
