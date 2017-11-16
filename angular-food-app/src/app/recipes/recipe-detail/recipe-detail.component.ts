import { Component, OnInit, Input} from '@angular/core';
import { Router, ActivatedRoute, Params, Data} from '@angular/router';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  finalSelectedRecipe;
  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: Data) =>{
        this.finalSelectedRecipe = data['recipe'];
      });
    //this.route.params
    //  .subscribe(
    //    (params: Params)=>{
    //      this.finalSelectedRecipe = this.recipeService.getRecipeById(params['id']);
    //    }
    //  )
  }

  addIngredientsToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.finalSelectedRecipe.ingredients);
  }

  editRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }
}
