import { Component, OnInit } from '@angular/core';
       
import { MatSnackBar } from '@angular/material';

import { Company } from '../data/Company';
import { CompaniesService } from '../services/companies.service';

import { Logger } from '../util/Logger';
const LOGGER: Logger = Logger.getLogger();

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  companies: Company[] = [];

  constructor(
    private companiesService: CompaniesService,
    private snackBar: MatSnackBar
  ) {
    
  }

  ngOnInit() {
    this.companiesService
      .listAll()
      .subscribe(
        data => {
          this.companies = data;
        });
  }

  deleteCompany(companyId): void {
    
    LOGGER.debug('deleteCompany - companyId: ' + companyId);
    this.companiesService
      .deleteCompany(companyId)
      .subscribe(
        data => {
          LOGGER.debug('delete successful: ' + data);
          this.companies = this.companies.filter(company => company.id !== companyId);
          this.openSnackBar('Company deleted successfully!', '');
        },
        error => {
          LOGGER.debug('delete error: ' + error);
          this.openSnackBar('', 'Error while deleting company: ' + companyId);
        }
      );

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
