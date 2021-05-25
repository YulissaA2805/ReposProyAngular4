import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { ProductComponent } from './Componentes/product/product.component';
import { EntradaBlogComponent } from './Componentes/entrada-blog/entrada-blog.component';
import { ResultadosBusquedaComponent } from './Componentes/resultados-busqueda/resultados-busqueda.component';
import { NotasComponent } from './Componentes/notas/notas.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    QuienesSomosComponent,
    SugerenciasComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ProductComponent,
    EntradaBlogComponent,
    ResultadosBusquedaComponent,
    NotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
