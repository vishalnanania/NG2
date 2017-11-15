import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

import { canDeactivateComponent } from '../shared/auth-deactvate-guard.service'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit, canDeactivateComponent {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {
    this.recipeService.selectedRecipe
      .subscribe(
        (recipe: Recipe)=>{
            this.selectedRecipe = recipe;
        }
      );
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return confirm('Are you done with shopping?');
  };

}
