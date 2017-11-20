import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent} from './shopping-list/shopping-list.component';
import { LoginComponent} from './login/login.component';
import { SignupComponent} from './signup/signup.component';

const appRoutes: Routes = [
  {path:'', redirectTo: '/recipes', pathMatch: 'full'},
  {path:'shopping-list', component: ShoppingListComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
