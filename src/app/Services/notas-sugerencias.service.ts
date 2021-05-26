import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nota } from '../Model/notas';

@Injectable({
  providedIn: 'root'
})
export class NotasSugerenciasService {
  API_URL = "http://localhost:3000/api/notas";
  notas: Nota[] | undefined;
  constructor(private http:HttpClient) { }

  getNotas(){
    return this.http.get<Nota[]>(this.API_URL);
  }
}
