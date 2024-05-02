import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TitularesPageRoutingModule } from './titulares-routing.module';

import { TitularesPage } from './titulares.page';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TitularesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TitularesPage]
})
export class TitularesPageModule {}
