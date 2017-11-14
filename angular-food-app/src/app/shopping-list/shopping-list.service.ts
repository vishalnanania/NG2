import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 2),
    new Ingredient('Carrot', 5)
  ];

  editStarted = new Subject<number>();

  constructor() { }

  getIngredients(){
    return this.ingredients;
  }

  getIngredientByIndex(index: number){
      return this.ingredients[index];
    }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

  addIngredients(ingredients){
    this.ingredients.push(...ingredients);
  }

}
