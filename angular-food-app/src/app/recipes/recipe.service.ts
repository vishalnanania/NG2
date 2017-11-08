import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();

    constructor() { }

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

    getRecipes(){
        return this.recipes.slice();
    }

}