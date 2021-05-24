import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntradasPrincipal } from '../Model/entradas-principal';

@Injectable({
  providedIn: 'root'
})
export class EntradasPrincipalService {
  API_URL = "http://localhost:3000/api/productos";
  products: EntradasPrincipal[] | undefined;
  constructor(private http:HttpClient) { }

  getProducts() {
    return this.http.get<EntradasPrincipal[]>(this.API_URL);
  }
}
