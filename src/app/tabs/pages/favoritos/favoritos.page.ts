import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/core/interfaces/noticia';
import { StoreFavoritesService } from 'src/app/core/services/store.favorites.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
})
export class FavoritosPage implements OnInit {
  listFavoritos: Noticia[] = [];
  loaded = false;
  exitsFavoritos =false
  constructor(private storeFavoritesService: StoreFavoritesService) { }

  ngOnInit() {
    this.loaded = true; // Cambiado a true para mostrar la carga inicialmente
    this.storeFavoritesService.obtenerFavoritosObservable()
      .subscribe(value => {
        this.listFavoritos = value
        this.checkForFavorites()
      this.loaded=true})
    this.storeFavoritesService.favoritos$
      .subscribe(value => {
        this.listFavoritos = value
      this.loaded=true})
  }
  checkForFavorites(){
    if(this.listFavoritos.length>0){
      this.exitsFavoritos =false
    }else{
      this.exitsFavoritos = true
    }
  }
}
