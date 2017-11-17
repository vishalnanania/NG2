import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class LoginService {
  constructor(private http: Http) { }
  login (loginData: any[]){
    return this.http.get('https://food-app-2717.firebaseio.com/signUp.json').map(
      (response: Response)=>{
        console.log(loginData);
        console.log(response.json());
      }
    );
  }
}

