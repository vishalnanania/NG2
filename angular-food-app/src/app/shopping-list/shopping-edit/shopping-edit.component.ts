import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) {

  }

  onAdd(form: NgForm){
    const formData = form.value;
    this.shoppingListService.addIngredient(new Ingredient(formData.name,formData.amount));
  };

  ngOnInit() {

  }

}
