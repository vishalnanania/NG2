import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import * as shoppingListActions from './store/shopping-list.actions';
import * as appReducers from '../store/app.reducers';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;

  constructor(private shoppingListService: ShoppingListService, private store: Store<appReducers.AppState>) {

  }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }

  editIngredient(index) {
    //this.shoppingListService.editStarted.next(index);
    this.store.dispatch( new shoppingListActions.StartEdit({index: index}));
  }

  onDelete(index){
    this.store.dispatch( new shoppingListActions.DeleteIngredient({index: index}));
    //this.shoppingListService.deleteIngredient(index);
    //this.ingredients = this.shoppingListService.getIngredients();
  }

}
