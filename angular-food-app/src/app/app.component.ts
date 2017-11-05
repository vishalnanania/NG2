import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class AppComponent {
    recipeComponent = true;
    shoppingListComponent = false;

    changeView(viewData){
        this.recipeComponent = viewData.recipeComponent;
        this.shoppingListComponent = viewData.shoppingListComponent;
    }
}
