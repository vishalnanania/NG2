import { Component, OnInit, Input} from '@angular/core';

import { RecipeService} from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe;
  @Input() index;

  constructor(private recipeListService: RecipeService) {

  }

  ngOnInit() {

  }

  onRecipeSelect(){
      this.recipeListService.selectedRecipe.emit(this.recipe);
  }

}
