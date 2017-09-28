import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROES: Hero[] = [
  { id: 1, name: 'Mr. Nice' },
  { id: 2, name: 'Narco' },
  { id: 3, name: 'Bombasto' },
  { id: 4, name: 'Celeritas' },
  { id: 5, name: 'Magneta' },
  { id: 6, name: 'RubberMan' },
  { id: 7, name: 'Dynama' },
  { id: 8, name: 'Dr IQ' },
  { id: 9, name: 'Magma' }
];

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
      <div class="list-group">
        <a href="#" class="list-group-item"
           *ngFor="let hero of heroes"
          [class.active]="hero === selectedHero"
          (click)="onSelect(hero)">
          {{hero.id}} : {{hero.name}}</a>
      </div>
    <hero-detail [hero]="selectedHero"></hero-detail>
  </div>
  `
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
