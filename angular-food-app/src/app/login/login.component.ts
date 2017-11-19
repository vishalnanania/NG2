import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthenticateService } from '../auth/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('f') loginFrom: NgForm;
  statusMsg = '';

  constructor(private authenticateService: AuthenticateService) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authenticateService.signInUser(this.loginFrom.value.email, this.loginFrom.value.password);
  }

  onClear(){
    this.loginFrom.reset();
  }

}
