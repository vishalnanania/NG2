import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe;
  onSelectedRecipe3(selectedRecipe){
    console.log(selectedRecipe);
    this.selectedRecipe = selectedRecipe;
  }

  constructor() { }

  ngOnInit() {
  }

}
