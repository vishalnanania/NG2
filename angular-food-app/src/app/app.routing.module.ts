import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from "./core/home/home.component";

const appRoutes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {path:'home', component: HomeComponent},
  {path:'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path:'shopping-list', loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules, useHash: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
