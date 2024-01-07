import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DetailHeroesPageRoutingModule } from './detail-heroes-routing.module';
import { DetailHeroesPage } from './detail-heroes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailHeroesPageRoutingModule
  ],
  declarations: [DetailHeroesPage]
})

export class DetailHeroesPageModule {}
