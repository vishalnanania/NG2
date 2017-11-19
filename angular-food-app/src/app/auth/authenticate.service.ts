import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Injectable()
export class AuthenticateService {

  constructor(private router: Router) { }
  token: string = '';
  signupUser(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((response)=>{
        alert(`You are successfully registered. Please login now.`);
        this.router.navigate(['/login']);
      },
      (error)=>{
        alert(error.message);
        console.log(error);
      }
    );
  }

  signInUser(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response)=>{
        firebase.auth().currentUser.getToken().then(
          (token)=>{
            this.token = token;
            this.router.navigate(['/recipe']);
          }
        );
      },
      (error)=>{
        alert(error.message);
        console.log(error);
      }
    );
  }

  getToken(){
    firebase.auth().currentUser.getToken().then(
      (token)=>{
        this.token = token;
      }
    );
    return this.token;
  }

}
