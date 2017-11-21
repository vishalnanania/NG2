import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {AuthenticateRoutingModule} from "./authenticate.routing.module";
import {AuthenticateService} from "./authenticate.service";

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthenticateRoutingModule
  ],
  providers: [AuthenticateService]
})
export class AuthenticateModule { }
