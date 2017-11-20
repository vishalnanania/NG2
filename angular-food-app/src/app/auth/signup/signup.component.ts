import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {AuthenticateService} from "../authenticate.service";


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') signUpFrom: NgForm;
  statusMsg = '';
  constructor(private authenticateService:AuthenticateService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authenticateService.signupUser(this.signUpFrom.value.email, this.signUpFrom.value.password);
  }

  onClear(){
    this.signUpFrom.reset();
  }
}
