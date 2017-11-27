import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Store} from "@ngrx/store";
import * as AppReducers from '../../store/app.reducers';
import * as AuthActions from '../../auth/store/auth.actions';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') signUpFrom: NgForm;
  statusMsg = '';
  constructor(public store: Store<AppReducers.AppState>) { }

  ngOnInit() {
  }

  onSubmit(){
    this.store.dispatch(new AuthActions.TrySignup({username: this.signUpFrom.value.email, password: this.signUpFrom.value.password}));
    //this.authenticateService.signupUser(this.signUpFrom.value.email, this.signUpFrom.value.password);
  }

  onClear(){
    this.signUpFrom.reset();
  }
}
