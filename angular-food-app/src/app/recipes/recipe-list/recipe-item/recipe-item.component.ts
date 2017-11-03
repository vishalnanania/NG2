import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeItem') recipeItemIngredient;
  @Output() eventName = new EventEmitter<{}>();

  constructor() {

  }

  ngOnInit() {
    this.eventName.emit(this.recipeItemIngredient);
  }

}
