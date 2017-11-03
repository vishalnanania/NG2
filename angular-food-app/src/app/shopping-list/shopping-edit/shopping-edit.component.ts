import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput;
  constructor() { }

  onAdd(){
    console.log(this.nameInput.nativeElement.value);
  }
  ngOnInit() {

  }

}
