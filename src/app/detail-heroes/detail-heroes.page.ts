import { Component, OnInit, inject } from '@angular/core';
import { HeroesService } from '../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { DeviceService } from '../services/device.service';

@Component({
  selector: 'app-detail-heroes',
  templateUrl: './detail-heroes.page.html',
  styleUrls: ['./detail-heroes.page.scss'],
})
export class DetailHeroesPage implements OnInit {

  heroe!: any;
  imgHeroe?: string;
  private activatedRoute = inject(ActivatedRoute);
  private data = inject(HeroesService)
  
  constructor(private translate: TranslateService, private deviceService: DeviceService) {
    this.getHeroeById();
    this.getLanguage();
   }

  ngOnInit() {   

  }

  async getLanguage() {
    this.translate.setDefaultLang('en');
    this.translate.use(await this.deviceService.getDeviceLanguage());
  }
  
  getHeroeById() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;

    return this.data.getHeroesById(parseInt(id, 10)).subscribe((data: any) => {
      const results = data.data.results;
      this.heroe = results && results.length > 0 ? results[0] : null;
      //console.log(this.heroe);
      
      this.imgHeroe = this.heroe.thumbnail.path + '.jpg';
      this.imgHeroe = this.imgHeroe.replace(/^http:\/\//i, 'https://');
      //console.log(this.imgHeroe);
    });
  }
}
