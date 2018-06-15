import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { Company } from '../data/Company';
import { Owner } from '../data/Owner';
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

  selectedOwner: Owner;

  createMode: boolean;
  company: Company;

  owners: Owner[];
  
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private companiesService: CompaniesService,
      public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    
    const id = +this.route.snapshot.paramMap.get('id');
    LOGGER.debug('CompanyEditComponent -> ' + id);

    this.companiesService
      .listAllOwners()
      .subscribe(data => {
        this.owners = data;
        this.selectedOwner = this.owners[0];
      });

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
          LOGGER.debug('loaded -> ' + data.name);
          this.company = data;
        });
    }
  }

  saveCompany() {

    if (this.createMode) {
      this.company.owners = [ this.selectedOwner ];
      this.companiesService
        .createCompany(this.company)
        .subscribe(
        data => {
          this.company = data;
          this.createMode = false;
          this.openSnackBar('Company created successfully!', '');
        }),
        error => {
          this.openSnackBar('', 'Error while creating company, check all mandatory fields.');
        };
    }
    else {
      this.companiesService
        .updateCompany(this.company)
        .subscribe(
        data => {
          this.company = data;
          this.openSnackBar('Company updated successfully!', '');
        }),
        error => {
          this.openSnackBar('', 'Error while updating company, check all mandatory fields.');
        };
      }
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  addOwner() {

    if(this.createMode) {
      this.openSnackBar('You need to save the company first!', '');
      return;
    }

    LOGGER.debug('addOwner -> ' + this.selectedOwner.name);

    this.companiesService
      .addOwner(this.company, this.selectedOwner)
      .subscribe(
        data => {
          this.company.owners = data.owners;
          this.openSnackBar('Owner added successfully!', '');
        },
        error => {
          this.openSnackBar('', 'Error while adding owner.');
        }
      );
  }
}
