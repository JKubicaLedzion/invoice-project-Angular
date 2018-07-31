import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

import { Invoice } from './invoice.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class InvoiceService {

  constructor(private http:HttpClient) {}

  private gitUrl = 'http://localhost:8080/invoices/';

  public getInvoiceDetails(id: number): Observable<Invoice> {
    return this.http.get<Invoice>(this.gitUrl + id, httpOptions);
  }

  public addInvoice(invoice : Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(this.gitUrl, invoice, httpOptions);
  }
}
