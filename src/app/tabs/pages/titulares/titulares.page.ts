import { Component, OnInit } from '@angular/core';
import { noticias, titulares } from 'src/app/data/data';
@Component({
  selector: 'app-titulares',
  templateUrl: './titulares.page.html',
  styleUrls: ['./titulares.page.scss'],
})
export class TitularesPage implements OnInit {
  titulares=titulares
  loaded = false
  list = titulares
  constructor() { }

  ngOnInit() {
    setTimeout(()=>{this.loaded=true},5000)
    this.builtList('espacio')
  }
  segmentChange(SegmentChangeEventDetail:any){
    const categoria = SegmentChangeEventDetail.detail.value
    this.builtList(categoria)  
  }
  builtList(categoria:string){
    const objetosFiltrados = this.titulares.filter(objeto => objeto.categoria === categoria);
    this.list = objetosFiltrados
  }
}
