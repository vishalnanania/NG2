import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

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
  `,
  providers: [HeroService]
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }
   getHeroes(): void {
      this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void {
      this.getHeroes();
    }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
