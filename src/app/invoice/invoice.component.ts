import { Component, OnInit } from '@angular/core';
import { Router }from '@angular/router';

import { Invoice }from './invoice.model';
import { InvoiceService }from './invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoice : Invoice;
  id : number;

  constructor(private router: Router, private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.invoice = new Invoice();
  }

  getInvoiceDetails(): void {
      this.invoiceService.getInvoiceDetails(this.id)
        .subscribe(
          data => {
            this.invoice = data;
          }
        );
    }
}
