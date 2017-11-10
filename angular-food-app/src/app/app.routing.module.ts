import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent} from './recipes/recipes.component';
import { ShoppingListComponent} from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  {path:'', redirectTo: '/recipes', pathMatch: 'full'},
  {path:'recipes', component: RecipesComponent},
  {path:'shopping-list', component: ShoppingListComponent},
  {path:'**', redirectTo: 'recipes'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
