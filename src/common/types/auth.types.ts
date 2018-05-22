export class Credentials {
  email: string;
  password: string;
  
  constructor() {
    this.email = '';
    this.password = '';
  }
}

export class NewCustomerDetails {
  email: string;
  password: string;

  constructor(options?: NewCustomerDetails) {
    this.email = (options && options.email) || '';
    this.password = (options && options.password) || '';
  }
}

export interface User {

}