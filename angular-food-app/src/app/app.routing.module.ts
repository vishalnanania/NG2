import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent} from './recipes/recipes.component';
import { RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import { ShoppingListComponent} from './shopping-list/shopping-list.component';

import { AuthGuardService} from './shared/auth-guard.service';

const appRoutes: Routes = [
  {path:'recipes', canActivateChild:[AuthGuardService], component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent, pathMatch: 'full'},
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent}
  ]},
  {path:'shopping-list', component: ShoppingListComponent},
  {path:'', redirectTo: '/recipes', pathMatch: 'full'},
  {path:'**', redirectTo: 'recipes'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
