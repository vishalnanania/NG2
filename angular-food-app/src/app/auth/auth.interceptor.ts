import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
import {AuthenticateService} from "./authenticate.service";
import {Injectable} from "@angular/core";
import {Store} from '@ngrx/store';
import * as AppReducers from '../store/app.reducers';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor (private authenticateService: AuthenticateService, private store: Store<AppReducers.AppState>){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    console.log('Intercepted');
    //const copiedReq = req.clone({headers: req.headers.set('auth', this.authenticateService.getToken())});
    return this.store.select('auth').switchMap((authState)=>{
      const copiedReq = req.clone({params: req.params.set('auth', authState.token)});
      return next.handle(copiedReq);
    });

  }
}
