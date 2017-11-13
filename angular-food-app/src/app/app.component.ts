import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class AppComponent {
  ngOnInit() {
    const myNumber = Observable.interval(1000);
      myNumber.subscribe(
        (number: Number) => {
          console.log(number);
        }
      )
  }
}
