import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe;
  @Output() selectedRecipe1 = new EventEmitter<void>();
  onRecipeSelect(){
    this.selectedRecipe1.emit();
  }

  constructor() {

  }

  ngOnInit() {

  }

}
