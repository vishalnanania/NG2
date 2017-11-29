import {NgModule} from "@angular/core";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {AuthenticateService} from "../auth/authenticate.service";
import {RecipeService} from "../recipes/recipe.service";
import {RecipeDetailResolverService} from "../recipes/recipe-detail/recipe-detail-resolver.service";
import {ShoppingListService} from "../shopping-list/shopping-list.service";
import {AuthGuardService} from "../shared/auth-guard.service";
import {AuthDeactvateGuardService} from "../shared/auth-deactvate-guard.service";
import {SharedModule} from "../shared/shared.module";
import {AppRoutingModule} from "../app.routing.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../auth/auth.interceptor";

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    HeaderComponent,
    AppRoutingModule
  ],
  providers: [
    AuthenticateService,
    RecipeService,
    RecipeDetailResolverService,
    ShoppingListService,
    AuthGuardService,
    AuthDeactvateGuardService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]

})
export class CoreModule { }
