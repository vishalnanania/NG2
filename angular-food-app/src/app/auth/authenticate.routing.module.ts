import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { SignupComponent} from './signup/signup.component';

const authenticateRoutes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(authenticateRoutes)],
  exports: [RouterModule]
})

export class AuthenticateRoutingModule {

}
