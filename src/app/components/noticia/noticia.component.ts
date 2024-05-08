import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/app/core/interfaces/noticia';
import { Browser } from '@capacitor/browser';
import { Share } from '@capacitor/share';
import { StoreFavoritesService } from 'src/app/core/services/store.favorites.service';
@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent  implements OnInit {
  @Input() noticia!:Noticia;
  loaded = false; // Cambiado a false para mostrar la carga inicialmente
  constructor(private storeFavoritesService:StoreFavoritesService) { }

  ngOnInit() {
    setTimeout(()=>{this.loaded=true},2000)
  }
  message="guardado en favoritos"
  isToastOpen = false;

  setOpen(isOpen: boolean) {
    this.isToastOpen = isOpen;
  }
  guardarFavoritos(title:string){
    this.storeFavoritesService.saveOrRemoveOfFavorites(title)
    this.setOpen(true)
  }
  async compartir(url:string){
    await Share.share({
      title: 'See cool stuff',
      text: 'Really awesome thing you need to see right meow',
      url: url,
      dialogTitle: 'Share with buddies',
    });
  }
  async ver(url:string){
    await Browser.open({ url: url })
  }
}
