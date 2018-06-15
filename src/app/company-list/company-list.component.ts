import { Component, OnInit } from '@angular/core';

import { Company } from '../data/Company';
import { CompaniesService } from '../services/companies.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: Company[];

  constructor(private companiesService: CompaniesService) { }

  ngOnInit() {
    this.companiesService
    .listAll()
    .subscribe(
      data => {
        this.companies = data;
      });
  }
}
