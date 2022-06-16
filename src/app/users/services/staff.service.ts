import { Injectable } from '@angular/core';
import { Register } from '../models/register';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Login } from '../models/login';
import { CreateProfile } from 'src/app/profile/model/createprofile';
import { Staff } from '../models/staff';
import { Transaction } from 'src/app/profile/model/transaction';

const headerData = {
  headers: { 'Content-Type': 'application/json' },
};
@Injectable({
  providedIn: 'root',
})
export class StaffService {
  //perform dependency injection

  api = '/api/admin/';
  staffapi = '/api/staff/';
  constructor(private httpClient: HttpClient) {}

  registerStaff(staff: Staff): Observable<any> {
    return this.httpClient.post(this.api + 'staff', staff);
  }

  getStaff(): Observable<any> {
    return this.httpClient.get(this.api + 'staff');
  }

  getCustomerById(id: string) {
    return this.httpClient.get(this.staffapi + 'customer/' + id);
  }

  getAllCustomers() {
    return this.httpClient.get(this.staffapi + 'customer');
  }

  toggleCustomer(customerAccount: any) {
    return this.httpClient.put(this.staffapi + 'customer', customerAccount);
  }
  approveBankAccount(bankAccount: any) {
    return this.httpClient.put(this.staffapi + 'accounts/approve', bankAccount);
  }

  getBankById(id: string) {
    return this.httpClient.get(this.staffapi + 'account/' + id);
  }

  getUnapprovedBankAccounts() {
    return this.httpClient.get(this.staffapi + 'accounts/approve');
  }

  getUnapprovedBeneficiaries() {
    return this.httpClient.get(this.staffapi + 'beneficiary');
  }
  approvedBeneficiary(beneficiary: any) {
    return this.httpClient.put(this.staffapi + 'beneficiary', beneficiary);
  }

  transfer(transaction: any) {
    return this.httpClient.put(this.staffapi + '/transfer', transaction);
  }

  loginStaff(staff: Staff): Observable<any> {
    return this.httpClient.post(this.api + 'login', staff);
  }
}
