import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  @ViewChild('f') recipeForm: NgForm;
  editRecipe: Recipe;
  newRecipe: Recipe;
  id: number;
  editMode=false;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) { }

  ngOnInit() {
  this.editRecipe = this.recipeService.getNewRecipe();
    this.route.params
      .subscribe(
        (params: Params)=>{
          this.id = params['id'];
          this.editMode = params['id'] != null;
        }
      );

    setTimeout(()=>{
      if(this.editMode){
        this.editRecipe = this.recipeService.getRecipeById(this.id);
      }else{
        this.editRecipe = this.recipeService.getNewRecipe();
      }
    },10);
  }

  addIngredient(){
    this.editRecipe.ingredients.push(new Ingredient('',1));
  }

  onDeleteIngredient(index){
    this.editRecipe.ingredients.splice(index,1);
  }

  onSubmit(){
    const newRecipe = new Recipe(this.editRecipe.name, this.editRecipe.description, this.editRecipe.imagePath, this.editRecipe.ingredients);
    if(this.editMode){
      this.recipeService.updateRecipe(this.id, newRecipe);
    }else{
      this.recipeService.addRecipe(newRecipe);
    }
    this.onCancel();
  }

  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }
}
