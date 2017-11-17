import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SignupService {

  constructor(private http: Http) { }
  signUp (signUpData){
    return this.http.post('https://food-app-2717.firebaseio.com/signUp.json', signUpData);
  }
}
