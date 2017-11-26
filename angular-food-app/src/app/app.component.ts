import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import 'rxjs/Rx';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class AppComponent {

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyB_tX_2nNryCLdmbl8sr4h1mylNW7kJKY4",
      authDomain: "food-app-2717.firebaseapp.com",
    });
  }
}
