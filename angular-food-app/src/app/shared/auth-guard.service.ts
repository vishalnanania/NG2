import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthenticateService } from '../auth/authenticate.service';

@Injectable()
export class AuthGuardService {

  constructor(private authenticateService: AuthenticateService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.authenticateService.isAuthenticated()){
      alert('Please login in order to execute this operation.');
    }
    return this.authenticateService.isAuthenticated();
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state);
  }
}
