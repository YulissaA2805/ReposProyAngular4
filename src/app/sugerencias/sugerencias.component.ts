import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NotasSugerenciasService } from '../Services/notas-sugerencias.service';

@Component({
  selector: 'app-sugerencias',
  templateUrl: './sugerencias.component.html',
  styleUrls: ['./sugerencias.component.css']
})
export class SugerenciasComponent implements OnInit {

  constructor(private notasService: NotasSugerenciasService) { }

  ngOnInit(): void {
    console.log(this.notasService.getNotas);
  }
  ngAfterViewInit(){
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.parallax');
      var instances = M.Parallax.init(elems, {});
    });
  }
}