import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeService } from './recipes/recipe.service';
import { RecipeDetailResolverService } from './recipes/recipe-detail/recipe-detail-resolver.service';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { AuthGuardService } from './shared/auth-guard.service';
import { AuthDeactvateGuardService } from './shared/auth-deactvate-guard.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { AppRoutingModule } from './app.routing.module';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';
import { AuthenticateService } from './auth/authenticate.service';
import { RecipesModule } from "./recipes/recipes.modules";
import { SharedModule } from "./shared/shared.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    RecipesModule,
    SharedModule
  ],
  providers: [SignupService, LoginService, AuthenticateService, RecipeService, RecipeDetailResolverService, ShoppingListService, AuthGuardService, AuthDeactvateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
