import { Component, OnInit, AfterViewInit } from '@angular/core';
import {animate, animation, state, style, transition, trigger} from "@angular/animations";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";

import { Ingredient } from '../shared/ingredient.model';
import * as shoppingListActions from './store/shopping-list.actions';
import * as appReducers from '../store/app.reducers';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  animations: [
    trigger('list', [
      state('initial', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate(300),
      ]),
      transition('* => void', [
        animate(300,
          style({
            opacity: 0,
            transform: 'translateX(-100px)',
          })
        ),
      ]),
    ])
  ]
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;

  constructor(private store: Store<appReducers.AppState>) {

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
