import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../shared/auth.service';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loginButton = false;
  constructor(private authService: AuthService, private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.authService.getLoginStatus();

    this.onFetchRecipes();
  }

  onLogin(){
    this.loginButton = !this.loginButton;
    if(!this.authService.getLoginStatus()){
      this.authService.login();
    }else{
      this.authService.logout();
    }
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

}
