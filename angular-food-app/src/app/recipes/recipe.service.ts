import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    selectedRecipe = new EventEmitter<Recipe>();

    constructor() { }

    private recipes: Recipe[] = [
          new Recipe('Subway', 'vegetable footlong', 'https://i.pinimg.com/originals/d0/c9/53/d0c95321eb3c28ffdd880593ef1305d3.jpg')
    ];

    getRecipes(){
        return this.recipes.slice();
    }

}
