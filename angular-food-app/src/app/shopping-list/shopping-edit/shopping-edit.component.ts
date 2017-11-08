import { Component, OnInit, ViewChild} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput;
  @ViewChild('amountInput') amountInput;

  constructor(private shoppingListService: ShoppingListService) {

  }

  onAdd(){
    this.shoppingListService.addIngredient(new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));
  };

  ngOnInit() {

  }

}
