import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { EntradasBlogService } from '../../Services/entradas-blog.service';
import { NgForm } from '@angular/forms';
import { Comentario } from 'src/app/Model/comentario';

@Component({
  selector: 'app-entrada-blog',
  templateUrl: './entrada-blog.component.html',
  styleUrls: ['./entrada-blog.component.css']
})
export class EntradaBlogComponent implements OnInit {
  comentario1:Comentario = {};
  
  @Input() data:any;
  constructor(public entradasBlogService: EntradasBlogService) { 
    this.comentario1 = new Comentario();
  }

  ngOnInit(): void {
    
    
  }
  ngAfterViewInit(){

      var elems = document.querySelectorAll('.chips');
      var instances = M.Chips.init(elems, {});

      var textNeedCount = document.querySelectorAll('#input_text, #textarea1');
      M.CharacterCounter.init(textNeedCount);
  }
  
  addComentario(form:NgForm){
    console.log(this.comentario1);
    //this.entradasBlogService.addComentario(form.value).subscribe(
      //res => {
        //console.warn("result",res);
      //}
    //),
    //err =>{
      //console.log(err);
    //}
  }

}
