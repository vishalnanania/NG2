import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {Observable} from "rxjs/Observable";

import { RecipeService } from '../../recipes/recipe.service';
import * as AppReducers from '../../store/app.reducers';
import * as AuthReducers from '../../auth/store/auth.reducers';
import * as AuthActions from "../../auth/store/auth.actions";
import * as RecipesActions from "../../recipes/store/recipes.actions";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  authState: Observable<AuthReducers.State>;
  constructor(private store: Store<AppReducers.AppState>, private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  onSaveRecipes(){
    // const recipes = this.recipeService.getRecipes();
    // this.recipeService.saveRecipes(recipes);
    this.store.dispatch(new RecipesActions.StoreRecipe());
  }

  onFetchRecipes(){
    //this.recipeService.fetchRecipes();
    this.store.dispatch(new RecipesActions.FetchRecipe());
  }

  onLogout(){
    this.store.dispatch(new AuthActions.TryLogout());
    // this.authenticateService.logout();
    // this.router.navigate(['../login']);
  }

}
