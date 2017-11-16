import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeService } from './recipes/recipe.service';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailResolverService } from './recipes/recipe-detail/recipe-detail-resolver.service';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

import { BasicHighlightDirective } from './directive/basic-highlight.directive';
import { UnlessDirective } from './directive/unless.directive';

import { AuthGuardService } from './shared/auth-guard.service';
import { AuthDeactvateGuardService } from './shared/auth-deactvate-guard.service';
import { AuthService } from './shared/auth.service';

import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app.routing.module';

import { ShortenPipe } from './pipe/shorten.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeItemComponent,
    BasicHighlightDirective,
    UnlessDirective,
    RecipeStartComponent,
    RecipeEditComponent,
    LoginComponent,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [RecipeService, RecipeDetailResolverService, ShoppingListService, AuthGuardService, AuthService, AuthDeactvateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
