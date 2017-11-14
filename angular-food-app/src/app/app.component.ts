import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class AppComponent {
  myNumberSubscription: Subscription;
  myCustNumberSubscription: Subscription;

  ngOnInit() {
    const myNumber = Observable.interval(1000);
    this.myNumberSubscription = myNumber.subscribe(
      (number: Number) => {
        console.log(number);
      }
    );

    const myCustNumber = Observable.create((observer: Observer<string>)=>{
      setTimeout(()=>{
        observer.next('first');
      },2000);
      setTimeout(()=>{
        observer.next('second');
      },4000);
      setTimeout(()=>{
        observer.complete();
      },6000);
      setTimeout(()=>{
        observer.error('error');
      },6000);

    });

    this.myCustNumberSubscription = myCustNumber.subscribe(
      (data: string)=>{ console.log(data);},
      (error: string)=>{ console.log(error);},
      ()=>{ console.log("completed");}
    );

    setTimeout(()=>{
      this.myNumberSubscription.unsubscribe();
      this.myCustNumberSubscription.unsubscribe();
    },10000);
  }

  NgOnDestroy(){
    this.myNumberSubscription.unsubscribe();
    this.myCustNumberSubscription.unsubscribe();
  }
}
