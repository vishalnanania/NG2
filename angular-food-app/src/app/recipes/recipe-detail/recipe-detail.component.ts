import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  finalSelectedRecipe;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params)=>{
          this.finalSelectedRecipe = this.recipeService.getRecipeById(params['id']);
        }
      )
  }

  addIngredientsToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.finalSelectedRecipe.ingredients);
  }

}
