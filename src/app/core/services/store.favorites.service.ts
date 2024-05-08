import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { todo } from 'src/app/data/data';
import { Noticia } from '../interfaces/noticia';
import { Observable, from } from 'rxjs';
import { of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreFavoritesService {
  private favoritosSubject: BehaviorSubject<Noticia[]> = new BehaviorSubject<Noticia[]>([]);
  favoritos$: Observable<Noticia[]> = this.favoritosSubject.asObservable();
  constructor() { }

   saveFavoritos= async (title:string) => {
    await Preferences.set({
      key: title,
      value: title,
    });
    const favoritosActuales = await this.obtenerFavoritos();
    console.log(favoritosActuales)
    this.favoritosSubject.next(favoritosActuales);
  };

  async obtenerFavoritos(): Promise<Noticia[]> {
    const allObjetos: Noticia[] = todo;
    const saveInStorage: any[] = [];

    await Promise.all(allObjetos.map(async (objeto) => {
      const valor = await this.checkIfItExists(objeto.title);
      if (valor) {
        saveInStorage.push(valor);
      }
    }));

    const objetosFiltrados = allObjetos.filter(objeto => saveInStorage.includes(objeto.title));
    console.log(objetosFiltrados);

    return objetosFiltrados;
  }
  
  async saveOrRemoveOfFavorites(title: string){
    var exists = await this.checkIfItExists(title)
    if(exists){
       this.removeName(title)
    }else{
      this.saveFavoritos(title)
    }
  }
  private async checkIfItExists(title: string) {
    const { value } = await Preferences.get({ key: title });
    return value;
  }

  

  obtenerFavoritosObservable(): Observable<Noticia[]> {
    return from(this.obtenerFavoritos());
  }

  removeName = async (title:string) => {
    await Preferences.remove({ key: title });
    const favoritosActuales = await this.obtenerFavoritos();
    console.log(favoritosActuales)
    this.favoritosSubject.next(favoritosActuales);
  };
}
