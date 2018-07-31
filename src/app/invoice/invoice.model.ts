import { Company }from './company.repository.model';
import { InvoiceEntry }from './entry.model';

export class Invoice {

  id: number;
  issueDate: string;
  dueDate: string;
  paid: boolean;

  supplier: Company;
  customer: Company;

  entryList : Array<InvoiceEntry>;

  constructor() {
    this.customer = new Company();
    this.supplier = new Company();
  }
}
