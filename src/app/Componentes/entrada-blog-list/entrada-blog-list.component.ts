import { Component, OnInit } from '@angular/core';
import { EntradasBlogService } from '../../Services/entradas-blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrada-blog-list',
  templateUrl: './entrada-blog-list.component.html',
  styleUrls: ['./entrada-blog-list.component.css']
})
export class EntradaBlogListComponent implements OnInit {

  constructor(public entradasBlogService: EntradasBlogService, public router: Router) { }

  ngOnInit(): void {
    //console.log(this.entradasBlogService.getEntradasBlog());
    this.getEntradasBlog();
  }
  getEntradasBlog(){
    this.entradasBlogService.getEntradasBlog().subscribe(
      res => {
        this.entradasBlogService.entradasblog = res;
        console.log(this.entradasBlogService.entradasblog);
      },
      err =>{
        console.log(err);
      }
    )
  }

  regresaInicio(){
    if(this.router.url.endsWith("1")){
      return 0;
    }
    else if(this.router.url.endsWith("2")){
      return 1;
    }
    else if(this.router.url.endsWith("3")){
      return 2;
    }
    else if(this.router.url.endsWith("4")){
      return 3;
    }
    else{
      console.log(this.router.url);
      return 0;
    }
    
  }
  regresaFin(){
    if(this.router.url.endsWith("1")){
      return 1;
    }
    else if(this.router.url.endsWith("2")){
      return 2;
    }
    else if(this.router.url.endsWith("3")){
      return 3;
    }
    else if(this.router.url.endsWith("4")){
      return 4;
    }
    else{
      console.log(this.router.url);
      return 4;
    }
    
  }

}
