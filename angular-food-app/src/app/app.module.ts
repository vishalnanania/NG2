import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeService } from './recipes/recipe.service';
import { RecipeDetailResolverService } from './recipes/recipe-detail/recipe-detail-resolver.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AuthGuardService } from './shared/auth-guard.service';
import { AuthDeactvateGuardService } from './shared/auth-deactvate-guard.service';
import { AppRoutingModule } from './app.routing.module';
import { AuthenticateService } from './auth/authenticate.service';
import { SharedModule } from "./shared/shared.module";
import { HomeComponent } from './home/home/home.component';
import { AuthenticateModule } from "./auth/authenticate.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    SharedModule,
    AuthenticateModule
  ],
  providers: [AuthenticateService, RecipeService, RecipeDetailResolverService, ShoppingListService, AuthGuardService, AuthDeactvateGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
