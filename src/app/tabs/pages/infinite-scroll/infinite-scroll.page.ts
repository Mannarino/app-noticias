import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Noticia } from 'src/app/core/interfaces/noticia';
import { todo } from 'src/app/data/data'; 
@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  noticias = todo
  loaded = true
  inicio:Noticia[]=[]
  loading = false;
  constructor() { }

  ngOnInit() {
    this.inicio= todo.slice(0,3)
    this.noticias = this.inicio
  }
 
  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
       // Obtén el siguiente conjunto de elementos (próximos 3 elementos)
      const siguiente = todo.slice(this.noticias.length, this.noticias.length + 3);
    
       // Agrega los elementos obtenidos al array noticias
       this.noticias.push(...siguiente);
    
       // Indica al Infinite Scroll que ha finalizado la carga
       ev.target.complete();
    }, 3000); // Simulación de carga durante 3 segundos
  }
  }
