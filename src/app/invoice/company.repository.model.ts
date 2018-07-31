import { Address }from './address.model';

export class Company {

  name: string;
  vatIdentificationNumber: string;
  phoneNumber: number;
  bankAccount: string;

  address: Address;

  constructor() {
    this.address = new Address();
  }
}
