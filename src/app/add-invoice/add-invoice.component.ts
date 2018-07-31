import{Component, OnInit}from '@angular/core';
import {Router}from '@angular/router';

import {Invoice} from '../invoice/invoice.model';
import {InvoiceEntry} from '../invoice/entry.model';
import {InvoiceService} from '../invoice/invoice.service';

@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

  invoice : Invoice;
  invoiceEntry : InvoiceEntry;
  invoiceEntryAdded : Array<InvoiceEntry>;

  constructor(private router: Router, private invoiceService: InvoiceService) { }

  ngOnInit() {
    this.invoice = new Invoice();
    this.invoice.entryList = new Array<InvoiceEntry>();
    this.invoiceEntry = new InvoiceEntry();
    this.invoiceEntryAdded = new Array<InvoiceEntry>()
  }

  addInvoice(): void {
    this.invoice.entryList.push(this.invoiceEntry);
    this.invoiceService.addInvoice(this.invoice)
      .subscribe(
        data => {
          alert("Invoice added successfully.");
        }
      );
  }

  addInvoiceEntry(): void {

    this.invoice.entryList.push(this.invoiceEntry);
    this.invoiceEntryAdded.push(this.invoiceEntry);
    this.invoiceEntry = new InvoiceEntry();
  }
}
