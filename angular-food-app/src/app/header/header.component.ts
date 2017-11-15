import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginButton = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getLoginStatus();
  }

  onLogin(){
    this.loginButton = !this.loginButton;
    if(!this.authService.getLoginStatus()){
      this.authService.login();
    }else{
      this.authService.logout();
    }
  }

}
