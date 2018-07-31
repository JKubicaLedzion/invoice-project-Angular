import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { InvoiceService } from './invoice/invoice.service';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule} from "@angular/common/http";
import { AddInvoiceComponent } from './add-invoice/add-invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    InvoiceComponent,
    AddInvoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [InvoiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
