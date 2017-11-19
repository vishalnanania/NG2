import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticateService } from '../auth/authenticate.service';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginButton = false;
  constructor(private authenticateService: AuthenticateService, private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //this.onFetchRecipes();
  }

  onSaveRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.recipeService.saveRecipes(recipes)
      .subscribe((response: Response)=>{
        console.log(response);
        this.router.navigate(['../'], {relativeTo: this.route});
      });
  }

  onFetchRecipes(){
    this.recipeService.fetchRecipes().map((response)=>{
      const recipes = response.json();
      recipes.forEach((recipe)=>{
        if(!recipe['ingredients']){
          recipe.ingredients = [];
        }
      });
      return recipes;
    }).subscribe((recipes)=>{
      console.log(recipes);
      this.recipeService.setRecipes(recipes);
    });
  }

  onLogout(){
    this.authenticateService.logout();
    this.router.navigate(['../login']);
  }

}
