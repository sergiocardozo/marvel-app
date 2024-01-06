import { Component, inject } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { MessageComponent } from '../message/message.component';

import { DataService, Message } from '../services/data.service';
import { HeroesService } from '../services/heroes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private heroeService = inject(HeroesService);
  private data = inject(DataService);

  characters: Array<any> = [];
  
  constructor() {
    this.getHeroesMarvel();
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  getHeroesMarvel(): any {
    let listHeroes: Array<any> = [];
    return this.heroeService.getHeroes().subscribe((data: any) => {
      this.characters = data.data.results;
      console.log(this.characters)
    })
  } 
}
