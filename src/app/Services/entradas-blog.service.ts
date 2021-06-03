import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EntradasBlog } from '../Model/entradas-blog';

@Injectable({
  providedIn: 'root'
})
export class EntradasBlogService {
  API_URL = "http://localhost:3000/api2/entradas";
  entradasblog: EntradasBlog[] | undefined;
  entradasblogcomments: EntradasBlog["comments"] | undefined;
  constructor(private http:HttpClient) { }

  getEntradasBlog() {
    return this.http.get<EntradasBlog[]>(this.API_URL);
  }

  addComentario(data:EntradasBlog["comments"]){
    console.log(data);
    return this.http.post<EntradasBlog["comments"]>(this.API_URL, data);
  }
}
