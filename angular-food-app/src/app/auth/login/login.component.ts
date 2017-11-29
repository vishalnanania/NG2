import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Store} from "@ngrx/store";
import * as AppReducers from '../../store/app.reducers';
import * as AuthActions from '../../auth/store/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginFrom: NgForm;
  statusMsg = '';

  constructor(public store: Store<AppReducers.AppState>) { }

  ngOnInit() {
  }

  onSubmit(){
    this.store.dispatch(new AuthActions.TryLogin({username: this.loginFrom.value.email, password: this.loginFrom.value.password}));
    //this.authenticateService.signInUser(this.loginFrom.value.email , this.loginFrom.value.password);
  }

  onClear(){
    this.loginFrom.reset();
  }

}
