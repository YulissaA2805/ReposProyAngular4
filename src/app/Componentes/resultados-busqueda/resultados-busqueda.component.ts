import { Component, OnInit } from '@angular/core';
import { EntradasPrincipalService } from '../../Services/entradas-principal.service'

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.css']
})
export class ResultadosBusquedaComponent implements OnInit {
  searchText;
  constructor(public entradasService: EntradasPrincipalService ) { }

  ngOnInit(): void {
    // console.log(this.entradasService.getProducts());
    this.getProducts();
  }

  getProducts(){
    this.entradasService.getProducts().subscribe(
      res => {
        this.entradasService.products = res;
        console.log(this.entradasService.products);
      },
      err => {
        console.log(err);
      }
    )
  }

}
