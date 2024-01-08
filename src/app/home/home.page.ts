import { Component, inject } from '@angular/core';

import { HeroesService } from '../services/heroes.service';
import { TranslateService } from '@ngx-translate/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private heroeService = inject(HeroesService);

  characters: Array<any> = [];

  constructor(private translate: TranslateService, private deviceService: DeviceService) {
    this.getHeroesMarvel();
    this.getLanguage();

  }

  async getLanguage() {
    this.translate.setDefaultLang('en');
    this.translate.use(await this.deviceService.getDeviceLanguage());
  }
  getHeroesMarvel(): any {
    return this.heroeService.getHeroes().subscribe((data: any) => {
      this.characters = data.data.results;
      //console.log(this.characters)
    })
  }
}
