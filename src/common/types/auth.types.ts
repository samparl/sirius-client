export class Credentials {
  email: string;
  password: string;
  
  constructor() {
    this.email = '';
    this.password = '';
  }
}

export class NewUserDetails {
  email: string;
  password: string;

  constructor(options?: NewUserDetails) {
    this.email = (options && options.email) || '';
    this.password = (options && options.password) || '';
  }
}