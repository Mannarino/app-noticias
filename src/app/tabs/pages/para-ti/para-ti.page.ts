import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/core/interfaces/noticia';
import { noticias } from 'src/app/data/data';
@Component({
  selector: 'app-para-ti',
  templateUrl: './para-ti.page.html',
  styleUrls: ['./para-ti.page.scss'],
})
export class ParaTiPage implements OnInit {
  loaded = false
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{this.loaded=true},5000)
  }
   noticias: Noticia[] = noticias
  
}
