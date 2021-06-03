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
import { EntradaBlogListComponent } from './Componentes/entrada-blog-list/entrada-blog-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { EntradaBlogUnicoComponent } from './Componentes/entrada-blog-unico/entrada-blog-unico.component';

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
    NotasComponent,
    EntradaBlogListComponent,
    EntradaBlogUnicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
