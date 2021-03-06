import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list/list';

@Component({
  selector: 'my-app',
  template:`
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <md-list>
      <md-list-item *ngFor="let hero of heroes">
      <img md-list-avatar src="https://material.angularjs.org/material2_assets/list/basic-list.png">
      <h3 md-line> {{hero.id}} </h3>
      <p md-line>
        <span> {{hero.name}} </span>
        <span class="demo-2"> -- {{hero.name}} </span>
      </p>
      </md-list-item>
    </md-list>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
  `,

  styles:[`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `],
   directives: [HeroDetailComponent,MD_LIST_DIRECTIVES],
   providers: [HeroService]
})
export class AppComponent {
  constructor(private heroService: HeroService) { }
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

}
