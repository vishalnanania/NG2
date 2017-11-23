import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from "@angular/common/http";
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Store } from "@ngrx/store";

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { AuthenticateService } from '../auth/authenticate.service';
import * as shoppingListActions from '../shopping-list/store/shopping-list.actions';
import * as shoppingListReducers from '../shopping-list/store/shopping-list.reducers';


@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  constructor(private store: Store<shoppingListReducers.AppState>, private shoppingListService: ShoppingListService, private authenticateService: AuthenticateService, private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) { }

  private recipes: Recipe[] = [
        new Recipe('Subway',
                'vegetable footlong',
                'https://i.pinimg.com/originals/d0/c9/53/d0c95321eb3c28ffdd880593ef1305d3.jpg',
                [ new Ingredient('Bread',1),
                  new Ingredient('Tomato',8),
                  new Ingredient('Banana Papers',4),
                  new Ingredient('Cucumber',8),
                  new Ingredient('Lettuce',10),
                  new Ingredient('Onion',4),
                  new Ingredient('Pickle',4),
                  new Ingredient('American Cheese',4),
                  new Ingredient('Chipotle Southwest',2),
                ]
                ),
        new Recipe('Burger',
                  'vegetable Burger',
                  'http://bk-apac-prd.s3.amazonaws.com/sites/burgerking.co.nz/files/BK_Salad-Burger-Detail.png',
                  [ new Ingredient('Buns',1),
                    new Ingredient('Tomato',3),
                    new Ingredient('Patty',1),
                    new Ingredient('Cucumber',8),
                    new Ingredient('Lettuce',5),
                    new Ingredient('Onion',3),
                    new Ingredient('Pickle',3),
                    new Ingredient('American Cheese',2)
                  ]
                  )
  ];

  public recipesChanged = new Subject<any[]>();
  private newRecipe: Recipe = new Recipe('','','',[new Ingredient('', 1)]);

  getRecipes(){
    return this.recipes;
  }

  saveRecipes (recipes){
    //const token = this.authenticateService.getToken();
    // const req = new HttpRequest(
    //     'PUT',
    //     'https://food-app-2717.firebaseio.com/recipes.json',
    //      recipes,
    //     {
    //       reportProgress: true,
    //       params: new HttpParams().set('auth', token),
    //      //headers: new HttpHeaders().set('key', value)
    //     }
    //   );
    // return this.httpClient.request(req)
    //   .subscribe((response)=>{
    //   console.log(response);
    //   this.router.navigate(['../'], {relativeTo: this.route});
    // });

    return this.httpClient.put(
      'https://food-app-2717.firebaseio.com/recipes.json',
      recipes
    ).subscribe((response: Response)=>{
      this.router.navigate(['../'], {relativeTo: this.route});
    });
  }

  fetchRecipes (){
    //const token = this.authenticateService.getToken();
    this.httpClient.get(
      'https://food-app-2717.firebaseio.com/recipes.json'
    ).subscribe((recipes: Recipe[])=>{
      for(let recipe of recipes) {
        if(!recipe['ingredients']){
          recipe.ingredients = [];
        }
      }
      this.recipes = recipes;
      this.recipesChanged.next(this.recipes);
    });
  }

  getRecipeById(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients){
    //this.shoppingListService.addIngredients(ingredients);
    this.store.dispatch( new shoppingListActions.AddIngredients(ingredients));
  }

  getNewRecipe(){
    return this.newRecipe;
  }

  updateRecipe(index: number, recipe: Recipe){
    this.recipes[index] = recipe;
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe);
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
  }

}
