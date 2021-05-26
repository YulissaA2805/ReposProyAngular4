import { Component, OnInit } from '@angular/core';
import { EntradasBlogService } from '../../Services/entradas-blog.service';

@Component({
  selector: 'app-entrada-blog-list',
  templateUrl: './entrada-blog-list.component.html',
  styleUrls: ['./entrada-blog-list.component.css']
})
export class EntradaBlogListComponent implements OnInit {

  constructor(public entradasBlogService: EntradasBlogService) { }

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

}
