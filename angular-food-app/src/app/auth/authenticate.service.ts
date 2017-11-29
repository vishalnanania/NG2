import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { Store } from '@ngrx/store';
import * as AppReducers from '../store/app.reducers';
import * as AuthActions from './store/auth.actions';

@Injectable()
export class AuthenticateService {

  constructor(private router: Router, private store: Store<AppReducers.AppState>) { }
  signupUser(email: string, password: string){
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

  signInUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((response)=>{
        this.store.dispatch(new AuthActions.Login());
        firebase.auth().currentUser.getIdToken().then(
          (token)=>{
            this.store.dispatch(new AuthActions.SetToken(token));
            this.router.navigate(['/recipes']);
          }
        );
      },
      (error)=>{
        alert(error.message);
        console.log(error);
      }
    );
  }

  // getToken(){
  //   firebase.auth().currentUser.getIdToken().then(
  //     (token)=>{
  //       this.store.dispatch(new AuthActions.SetToken(token));
  //     }
  //   );
  //   return this.token;
  // }


  logout(){
    firebase.auth().signOut();
    this.store.dispatch(new AuthActions.Logout());
  }

}
