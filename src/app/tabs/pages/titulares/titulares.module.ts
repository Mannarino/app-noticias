import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitularesPageRoutingModule } from './titulares-routing.module';

import { TitularesPage } from './titulares.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitularesPageRoutingModule
  ],
  declarations: [TitularesPage]
})
export class TitularesPageModule {}
