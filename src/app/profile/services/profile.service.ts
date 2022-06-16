import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from '../model/bank';
import { Beneficiary } from '../model/beneficiary';
import { CreateProfile } from '../model/createprofile';
import { Education } from '../model/education';
import { Experience } from '../model/experience';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  customerapi = '/api/customer';

  constructor(private httpClient: HttpClient) {}

  createProfile(profile: CreateProfile): Observable<any> {
    return this.httpClient.post(this.customerapi, profile);
  }

  createBank(bank: Bank, id: string) {
    return this.httpClient.post(this.customerapi + '/' + id + '/account', bank);
  }

  getBanks(id: string) {
    return this.httpClient.get(this.customerapi + '/' + id + '/account');
  }

  getBank(id: string) {
    return this.httpClient.get(this.customerapi + '/' + id + '/account/' + id);
  }

  createBeneficiary(beneficiary: Beneficiary, id: string) {
    return this.httpClient.post(
      this.customerapi + '/' + id + '/beneficiary',
      beneficiary
    );
  }

  getBeneficiaries(id: string) {
    return this.httpClient.get(this.customerapi + '/' + id + '/beneficiary');
  }

  deleteBeneficiary(id: string) {
    return this.httpClient.delete(
      this.customerapi + '/' + id + '/beneficiary/' + id
    );
  }

  transfer(transaction: Transaction) {
    return this.httpClient.put(this.customerapi + '/transfer', transaction);
  }

  updatePassword(username: string, password: string) {
    return this.httpClient.put(
      this.customerapi + '/' + username + '/forgot/' + password,
      null
    );
  }

  questionVerification(username: string, answer: string) {
    return this.httpClient.get(
      this.customerapi + '/' + username + '/forgot/question/' + answer
    );
  }

  // getProfile(): Observable<any> {
  //   return this.httpClient.get(this.api);
  // }

  // createProfile(profile: CreateProfile): Observable<any> {
  //   return this.httpClient.post(this.api, profile);
  // }

  // createExperience(experience: Experience) {
  //   return this.httpClient.post(this.api + '/experience', experience);
  // }

  // createEducation(education: Education) {
  //   return this.httpClient.post(this.api + '/education', education);
  // }

  // deleteEducation(eduId: string) {
  //   return this.httpClient.delete(this.api + '/education/' + eduId);
  // }
  // deleteExperience(expId: string) {
  //   return this.httpClient.delete(this.api + '/experience/' + expId);
  // }

  // createBank(bank: Bank) {
  //   return this.httpClient.post(this.api + '/bank', bank);
  // }

  // createBeneficiary(beneficiary: Beneficiary) {
  //   return this.httpClient.post(this.api + '/beneficiary', beneficiary);
  // }

  // deleteBeneficiary(benId: string) {
  //   return this.httpClient.delete(this.api + '/beneficiary/' + benId);
  // }

  // deleteBank(bankId: string) {
  //   return this.httpClient.delete(this.api + '/bank/' + bankId);
  // }

  // createTransaction(transaction: Transaction) {
  //   return this.httpClient.post(this.api + '/transaction', transaction);
  // }

  // getBanks() {
  //   return this.httpClient.get(this.api + '/banks/all');
  // }

  // getAll() {
  //   return this.httpClient.get(this.api + '/all');
  // }

  // deleteUser(id: any) {
  //   return this.httpClient.delete(this.api + '/' + id);
  // }
}
