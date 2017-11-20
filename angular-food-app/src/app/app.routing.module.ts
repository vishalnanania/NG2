import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { SignupComponent} from './signup/signup.component';

const appRoutes: Routes = [
  {path:'', redirectTo: '/recipes', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
