import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from 'rxjs/Observable';
import {AuthenticateService} from "./authenticate.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor (private authenticateService: AuthenticateService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    console.log('Intercepted');
    //const copiedReq = req.clone({headers: req.headers.set('auth', this.authenticateService.getToken())});
    const copiedReq = req.clone({params: req.params.set('auth', this.authenticateService.getToken())});
    return next.handle(copiedReq);
  }
}
