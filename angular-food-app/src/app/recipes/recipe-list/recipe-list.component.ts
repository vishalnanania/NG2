import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {Store} from "@ngrx/store";
import * as AppReducers from '../../store/app.reducers';
import * as RecipesReducers from '../store/recipes.reducers';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipesState: Observable<RecipesReducers.State>;

  constructor(private store: Store<AppReducers.AppState>, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipesState = this.store.select('recipes')
    // this.recipes = this.recipeService.getRecipes();
    // this.recipeService.recipesChanged.subscribe((recipes)=>{
    //   this.recipes = recipes;
    // });
  }

  newRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
