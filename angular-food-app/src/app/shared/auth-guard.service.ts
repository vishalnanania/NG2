import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as AppReducers from '../store/app.reducers';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthGuardService {
  constructor(private store: Store<AppReducers.AppState>) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select('auth').map((authState)=>{
      if(!authState.authenticated){
        alert('Please login in order to execute this operation.');
      }
      return authState.authenticated;
    });

  }

  canActivateChild(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
