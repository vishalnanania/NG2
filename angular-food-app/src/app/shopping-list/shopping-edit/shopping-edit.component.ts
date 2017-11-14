import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('f') editForm: NgForm;
  selectedEditIngredient: Ingredient;
  editSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {

  }

  onAdd(form: NgForm){
    const formData = form.value;
    this.shoppingListService.addIngredient(new Ingredient(formData.name,formData.amount));
  };

  ngOnInit() {
    this.editSubscription = this.shoppingListService.editStarted
      .subscribe(
        (index)=>{
          this.selectedEditIngredient = this.shoppingListService.getIngredientByIndex(index);
          this.editForm.setValue({
            name: this.selectedEditIngredient.name,
            amount: this.selectedEditIngredient.amount
          })
        }
      );
  }

  ngOnDestroy(){
    this.editSubscription.unsubscribe();
  }

}
