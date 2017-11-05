import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
      new Recipe('Subway', 'vegetable footlong', 'https://i.pinimg.com/originals/d0/c9/53/d0c95321eb3c28ffdd880593ef1305d3.jpg')
  ];

  @Output() selectedRecipe2 = new EventEmitter<{}>();
  onRecipeSelected(recipe){
    this.selectedRecipe2.emit(recipe);
  }

  eventFired (eventData){
    console.log("event Fired", eventData);
  }

  constructor() { }

  ngOnInit() {
  }

}
