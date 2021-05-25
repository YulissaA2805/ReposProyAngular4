import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotasSugerenciasService {
  private URL = "http://localhost:3000/api/notas";
  constructor() { }

  getNotas(){
    return [];
  }
}
