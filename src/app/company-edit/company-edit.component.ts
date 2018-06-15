import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { Company } from '../data/Company';
import { CompaniesService } from '../services/companies.service';

const CREATE = 0;

import { Logger } from '../util/Logger';
const LOGGER: Logger = Logger.getLogger();

@Component({
  selector: 'app-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.css']
})
export class CompanyEditComponent implements OnInit {

  createMode: boolean;
  company: Company;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private companiesService: CompaniesService
  ) {}

  ngOnInit() {
    
    const id = +this.route.snapshot.paramMap.get('id');
    LOGGER.debug('CompanyEditComponent -> ' + id);
    if (id === CREATE) {
      LOGGER.debug('create mode');
      this.createMode = true;
      this.company = new Company();
    }
    else {
      LOGGER.debug('update mode');
      this.createMode = false;
      this.companiesService
        .loadCompany(id)
        .subscribe(data => {
          LOGGER.debug('loaded -> ' + data.name)
          this.company = data;
        });
    }
  }
}
