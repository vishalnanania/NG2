import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginFrom: NgForm;
  statusMsg = '';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.loginService.login(this.loginFrom.value)
      .subscribe(
      (response)=>{
      },(error)=>{
        this.statusMsg = 'Server is down. Please try again later.';
      });
  }

  onClear(){
    this.loginFrom.reset();
  }

}
