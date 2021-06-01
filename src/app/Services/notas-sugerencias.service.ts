import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Nota } from '../Model/notas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotasSugerenciasService {
  API_URL = "http://localhost:3000/api/notas";
  notas: Nota[] | undefined;
  constructor(public http:HttpClient) { }

  getNotas(){
    return this.http.get<Nota[]>(this.API_URL);
  }

  addNota(data:Nota){
    console.log(data);
    return this.http.post<Nota[]>(this.API_URL, data);
  }
}
