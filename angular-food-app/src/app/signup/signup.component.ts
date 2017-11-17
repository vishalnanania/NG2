import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { SignupService } from './signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('f') signUpFrom: NgForm;
  statusMsg = '';
  constructor(private signupService:SignupService) { }

  ngOnInit() {
  }

  onSubmit(){
    //console.log(this.signUpFrom);
    this.signupService.signUp(this.signUpFrom.value)
      .subscribe(
      (response)=>{
        this.signUpFrom.reset();
        this.statusMsg = 'You have successfully signed up.';
      },(error)=>{
        this.statusMsg = 'Server is down. Please try again later.';
      });
  }

  onClear(){
    this.signUpFrom.reset();
  }
}
