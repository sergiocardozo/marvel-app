import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListHeroesComponent } from './list-heroes.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ListHeroesComponent],
  imports: [ FormsModule, IonicModule, RouterModule,
    CommonModule
  ],
  exports: [ListHeroesComponent]
})
export class ListHeroesModule { }
