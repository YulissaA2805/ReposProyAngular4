import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { EntradasBlogService } from '../../Services/entradas-blog.service';

@Component({
  selector: 'app-entrada-blog',
  templateUrl: './entrada-blog.component.html',
  styleUrls: ['./entrada-blog.component.css']
})
export class EntradaBlogComponent implements OnInit {
  @Input() data:any;
  constructor(public entradasBlogService: EntradasBlogService) { }

  ngOnInit(): void {
    
    this.getEntradasBlog();
  }
  ngAfterViewInit(){

      var elems = document.querySelectorAll('.chips');
      var instances = M.Chips.init(elems, {});

      var textNeedCount = document.querySelectorAll('#input_text, #textarea1');
      M.CharacterCounter.init(textNeedCount);
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
