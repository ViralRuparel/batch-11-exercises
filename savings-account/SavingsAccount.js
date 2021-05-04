export class SavingsAccount { 
  constructor(accountNumber, email, fname, lname){    
  if (accountNumber.length !== 6) {
    throw new Error('Account Number must be a 6-digit number');
  }

  const emailPattern = /\S+@\S+.\S+/gi;
  if (!(emailPattern.test(email))) {
    throw new Error('Invalid e-mail');
  }

  if (fname.length < 3 || fname.length > 20) {
    throw new Error('First name must be between 3 and 20 characters long');
  }

  const alphabetPattern = /^[a-zA-Z]+$/gi;
  if (!alphabetPattern.test(lname)) throw new Error('Last name must contain english alphabets only');

  this._accountNumber = accountNumber;
  this._email = email;
  this._firstName = fname;
  this._lastName = lname;
  this.products = [];
  }
}


// export {
//   SavingsAccount,
// };
