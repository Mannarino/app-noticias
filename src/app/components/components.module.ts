import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaComponent } from './noticia/noticia.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [ NoticiaComponent ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [ NoticiaComponent ]
})
export class ComponentsModule { }
