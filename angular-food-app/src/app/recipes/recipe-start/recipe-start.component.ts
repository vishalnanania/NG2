import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeStartComponent implements OnInit {
  msg = 'Please select Recipe!!!';
  constructor() { }

  ngOnInit() {
  }

}
