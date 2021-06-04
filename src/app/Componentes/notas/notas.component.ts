import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
  }

  rand = Math.floor( Math.random() * 13 );

  randomColor(){
    var colores:string[];
    colores = ["yellow lighten-1", "pink lighten-3", "green accent-2", "purple lighten-3", 
    "cyan lighten-2", "orange lighten-2", "red accent-1", "blue accent-1", "deep-orange lighten-4", 
    "teal accent-1", "lime accent-1", "deep-purple lighten-2", "blue-grey lighten-4"];
    return colores[this.rand];
  }

}
