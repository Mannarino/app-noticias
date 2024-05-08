import { Injectable } from '@angular/core';
import { todo } from 'src/app/data/data'; 
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  noticias = todo
  constructor() { }
}
