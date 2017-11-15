import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

export interface canDeactivateComponent {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean ;
}

@Injectable()
export class AuthDeactvateGuardService {

  constructor() { }

  canDeactivate(component: canDeactivateComponent,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}

