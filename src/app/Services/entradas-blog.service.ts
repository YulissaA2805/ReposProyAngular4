import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntradasBlog } from '../Model/entradas-blog';

@Injectable({
  providedIn: 'root'
})
export class EntradasBlogService {
  API_URL = "http://localhost:3000/api2/entradas/${id}";
  entradasblog: EntradasBlog[] | undefined;
  constructor(private http:HttpClient) { }

  getEntradasBlog() {
    return this.http.get<EntradasBlog[]>(this.API_URL);
  }
}
