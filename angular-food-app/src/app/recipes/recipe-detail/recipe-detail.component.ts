import { Component, OnInit, Input} from '@angular/core';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() finalSelectedRecipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  addIngredientsToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.finalSelectedRecipe.ingredients);
  }

}
