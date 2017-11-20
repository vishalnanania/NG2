import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {RecipesComponent} from "./recipes.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RecipeDetailResolverService} from "./recipe-detail/recipe-detail-resolver.service";
import {AuthGuardService} from "../shared/auth-guard.service";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";

const recipesRoutes: Routes = [
  {path:'recipes', component: RecipesComponent, children: [
    {path: '', component: RecipeStartComponent},
    {path: 'new', component: RecipeEditComponent, canActivate:[AuthGuardService]},
    {path: ':id', resolve:{recipe: RecipeDetailResolverService}, component: RecipeDetailComponent},
    {path: ':id/edit', component: RecipeEditComponent, canActivate:[AuthGuardService]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule]
})

export class RecipesRoutingModule {

}
