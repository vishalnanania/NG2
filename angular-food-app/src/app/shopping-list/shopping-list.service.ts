import { Injectable } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {
  ingredients: Ingredient[] = [
      new Ingredient('Tomato',5),
      new Ingredient('Cucumber',5),
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient){
    console.log(ingredient);
    this.ingredients.push(ingredient);
  }

}
