import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailHeroesPageRoutingModule } from './detail-heroes-routing.module';
import { DetailHeroesPage } from './detail-heroes.page';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');

}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailHeroesPageRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [DetailHeroesPage]
})

export class DetailHeroesPageModule {}
