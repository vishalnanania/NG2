import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import { HttpClientModule } from "@angular/common/http";
import { StoreModule } from "@ngrx/store";


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { SharedModule } from "./shared/shared.module";
import { AuthenticateModule } from "./auth/authenticate.module";
import { CoreModule } from "./core/core.module";
import { reducers } from "./store/app.reducers";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    AuthenticateModule,
    CoreModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
