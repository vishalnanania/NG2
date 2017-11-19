import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent} from './recipes/recipes.component';
import { RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailResolverService } from './recipes/recipe-detail/recipe-detail-resolver.service';
import { ShoppingListComponent} from './shopping-list/shopping-list.component';

import { LoginComponent} from './login/login.component';
import { SignupComponent} from './signup/signup.component';

import { AuthGuardService} from './shared/auth-guard.service';
import { AuthDeactvateGuardService} from './shared/auth-deactvate-guard.service';

const appRoutes: Routes = [
  {path:'', redirectTo: '/recipes', pathMatch: 'full'},
  {path:'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent, canActivate:[AuthGuardService]},
    {path: ':id', resolve:{recipe: RecipeDetailResolverService}, component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent, canActivate:[AuthGuardService]}
  ]},
  {path:'shopping-list', component: ShoppingListComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: SignupComponent},
  {path:'**', redirectTo: 'recipes'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
