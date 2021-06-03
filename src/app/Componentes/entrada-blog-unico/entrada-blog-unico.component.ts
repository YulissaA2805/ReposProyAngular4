import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrada-blog-unico',
  templateUrl: './entrada-blog-unico.component.html',
  styleUrls: ['./entrada-blog-unico.component.css']
})
export class EntradaBlogUnicoComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
