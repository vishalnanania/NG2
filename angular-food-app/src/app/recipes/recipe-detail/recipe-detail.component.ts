import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params, Data} from '@angular/router';

import {Observable} from "rxjs/Observable";
import * as AppReducers from '../../store/app.reducers';
import * as RecipesReducers from '../store/recipes.reducers';
import {Store} from "@ngrx/store";
import * as ShoppingListActions from "../../shopping-list/store/shopping-list.actions";
import * as RecipesActions from "../store/recipes.actions";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  finalSelectedRecipeState: Observable<RecipesReducers.State>;
  id;
  constructor(private store: Store<AppReducers.AppState>, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.data
    //   .subscribe((data: Data) =>{
    //     this.finalSelectedRecipe = data['recipe'];
    //   });
    this.route.params
      .subscribe(
        (params: Params)=>{
          this.id = params['id'];
          this.finalSelectedRecipeState = this.store.select('recipes');
          // this.finalSelectedRecipe = this.recipeService.getRecipeById(params['id']);
        }
      )
  }

  addIngredientsToShoppingList(){
    this.store.select('recipes')
      .take(1)
      .subscribe((recipeState: RecipesReducers.State)=>{
        this.store.dispatch(new ShoppingListActions.AddIngredients(recipeState.recipes[this.id].ingredients));
      });
    //this.recipeService.addIngredientsToShoppingList(this.finalSelectedRecipe.ingredients);
  }

  editRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  deleteRecipe(){
    this.store.dispatch(new RecipesActions.DeleteRecipe(this.id));
    //this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
