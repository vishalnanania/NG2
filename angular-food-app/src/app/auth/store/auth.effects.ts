import {Actions, Effect} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import * as AuthActions from "./auth.actions";
import * as firebase from "firebase";
import {fromPromise} from 'rxjs/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.actions$
    .ofType(AuthActions.TRY_SIGNUP)
    .map((action:AuthActions.TrySignup) => {
      return action.payload;
    })
    .switchMap((authData) => {
      return fromPromise(firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password));
    })
    .switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token) => {
      alert(`You are successfully registered.`);
      this.router.navigate(['/']);
      return [
        {
          type: AuthActions.SIGNUP
        },
        {
          type: AuthActions.SET_TOKET,
          payload: token
        }
      ];
    });

  @Effect()
  authLogin = this.actions$
    .ofType(AuthActions.TRY_LOGIN)
    .map((action:AuthActions.TryLogin) => {
      return action.payload;
    })
    .switchMap((authData) => {
      return fromPromise(firebase.auth().signInWithEmailAndPassword(authData.username, authData.password));
    })
    .switchMap(() => {
      return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token) => {
      alert(`You are successfully logged in.`);
      this.router.navigate(['/']);
      return [
        {
          type: AuthActions.LOGIN
        },
        {
          type: AuthActions.SET_TOKET,
          payload: token
        }
      ];
    });

  constructor(private actions$: Actions, private router: Router){

  }
}
