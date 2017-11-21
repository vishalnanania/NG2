import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticateService } from '../../auth/authenticate.service';
import { RecipeService } from '../../recipes/recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public authenticateService: AuthenticateService, private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //this.onFetchRecipes();
  }

  onSaveRecipes(){
    const recipes = this.recipeService.getRecipes();
    this.recipeService.saveRecipes(recipes);

  }

  onFetchRecipes(){
    this.recipeService.fetchRecipes();
  }

  onLogout(){
    this.authenticateService.logout();
    this.router.navigate(['../login']);
  }

}
