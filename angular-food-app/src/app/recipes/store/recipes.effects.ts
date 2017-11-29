import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {HttpClient, HttpRequest} from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';
import {Recipe} from "../recipe.model";
import * as RecipesActions from "./recipes.actions";
import * as AppReducers from "../../store/app.reducers";


@Injectable()
export class RecipesEffects {

  @Effect()
  recipeFetch = this.actions$
    .ofType(RecipesActions.FETCH_RECIPE)
    .switchMap((action: RecipesActions.FetchRecipe) => {
      return this.httpClient.get(
        'https://food-app-2717.firebaseio.com/recipes.json'
      ).map((recipes: Recipe[])=>{
        for(let recipe of recipes) {
          if(!recipe['ingredients']){
            recipe.ingredients = [];
          }
        }
        alert('Recipes fetched successfully.');
        return {
          type: RecipesActions.SET_RECIPES,
          payload: recipes
        };
      });
    });

  @Effect({dispatch: false})
  recipeStore = this.actions$
    .ofType(RecipesActions.STORE_RECIPE)
    .withLatestFrom(this.store.select('recipes'))
    .switchMap(([action, state]) => {
      const req = new HttpRequest('PUT', 'https://food-app-2717.firebaseio.com/recipes.json', state.recipes, {reportProgress: true});
      alert('Recipes Stored successfully.');
      return this.httpClient.request(req);
    });

  constructor(private actions$: Actions, private store: Store<AppReducers.AppState>, private httpClient: HttpClient){

  }
}
