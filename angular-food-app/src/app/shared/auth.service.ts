import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  loggedIn = true;

  constructor(){

  }

  getLoginStatus(){
    return this.loggedIn;
  }

  login(){
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

  authenticate(){
    const promise = new Promise(
      (resolve, reject)=>{
        setTimeout(()=>{
          resolve(this.loggedIn);
        },100);
      }
    );
    return promise;
  }

}
