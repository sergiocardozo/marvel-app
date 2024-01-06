import { Component, inject } from '@angular/core';

import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private heroeService = inject(HeroesService);

  characters: Array<any> = [];
  
  constructor() {
    this.getHeroesMarvel();
  }

  getHeroesMarvel(): any {
    return this.heroeService.getHeroes().subscribe((data: any) => {
      this.characters = data.data.results;
      //console.log(this.characters)
    })
  } 
}
