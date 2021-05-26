import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NotasSugerenciasService } from '../Services/notas-sugerencias.service';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent implements OnInit {

  constructor(public notasService: NotasSugerenciasService) { }

  ngOnInit(): void {
    //console.log(this.notasService.getNotas);
    this.getNotas();
  }

  getNotas(){
    this.notasService.getNotas().subscribe(
      res => {
        this.notasService.notas = res;
        console.log(this.notasService.notas);
      },
      err =>{
        console.log(err);
      }
    )
  }

  ngAfterViewInit(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elems, {});
    });
  }
}