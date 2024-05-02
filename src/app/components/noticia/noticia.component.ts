import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/app/core/interfaces/noticia';
import { Browser } from '@capacitor/browser';
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent  implements OnInit {
  @Input() noticia!:Noticia;
  @Input() loaded!:boolean;
  constructor() { }

  ngOnInit() {}
  guardarFavoritos(){
    console.log('guardar')
  }
  compartir(){
    console.log('compartir')
  }
  async ver(url:string){
    await Browser.open({ url: url })
  }
}
