import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import { Store } from "@ngrx/store";

import { Ingredient } from '../../shared/ingredient.model';
import * as shoppingListActions from '../store/shopping-list.actions';
import * as appReducers from '../../store/app.reducers';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;
  selectedEditIngredient: Ingredient;
  editSubscription: Subscription;
  editMode = false;

  constructor(private store: Store<appReducers.AppState>) {

  }

  onAdd(form: NgForm){
    const formData = form.value;
    const newIngredient = new Ingredient(formData.name,formData.amount);
    if(this.editMode){
      //this.shoppingListService.editIngredient(this.editIndex, new Ingredient(formData.name,formData.amount));
      this.store.dispatch( new shoppingListActions.UpdateIngredient({ingredient: newIngredient}));
    }else{
      //this.shoppingListService.addIngredient(new Ingredient(formData.name,formData.amount));
      this.store.dispatch(new shoppingListActions.AddIngredient(newIngredient));
    }
    this.editForm.reset();
    this.editMode = false;
  };

  onClear(){
    this.editForm.reset();
    this.editMode = false;
  }

  ngOnInit() {
    this.editSubscription = this.store.select('shoppingList')
      .subscribe(
        (data)=>{
          if(data.editedIngredientIndex > -1){
            this.editMode = true;
            this.selectedEditIngredient = data.editedIngredient;
            this.editForm.setValue({
              name: this.selectedEditIngredient.name,
              amount: this.selectedEditIngredient.amount
            })
          }else {
            this.editMode = false;
          }
        }
      );

    // this.editSubscription = this.shoppingListService.editStarted
    //   .subscribe(
    //     (index)=>{
    //       this.editMode = true;
    //       this.editIndex = index;
    //       this.selectedEditIngredient = this.shoppingListService.getIngredientByIndex(index);
    //       this.editForm.setValue({
    //         name: this.selectedEditIngredient.name,
    //         amount: this.selectedEditIngredient.amount
    //       })
    //     }
    //   );
  }

  ngOnDestroy(){
    this.store.dispatch(new shoppingListActions.StopEdit());
    this.editSubscription.unsubscribe();
  }

}
