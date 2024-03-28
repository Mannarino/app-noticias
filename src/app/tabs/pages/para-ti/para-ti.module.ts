import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParaTiPageRoutingModule } from './para-ti-routing.module';

import { ParaTiPage } from './para-ti.page';
import { NoticiaComponent } from 'src/app/components/noticia/noticia.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParaTiPageRoutingModule
  ],
  declarations: [ParaTiPage,NoticiaComponent]
})
export class ParaTiPageModule {}
