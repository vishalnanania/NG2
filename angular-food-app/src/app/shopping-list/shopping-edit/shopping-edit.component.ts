import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput;
  @ViewChild('amountInput') amountInput;
  @Output() addItemToShoppingList = new EventEmitter<{}>();
  constructor() { }

  onAdd(){
    console.log(this.nameInput.nativeElement.value);
    console.log(this.amountInput.nativeElement.value);
    this.addItemToShoppingList.emit(new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value));
  };

  ngOnInit() {

  }

}
