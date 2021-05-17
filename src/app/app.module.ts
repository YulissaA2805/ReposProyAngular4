import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';
import { HeaderComponent } from './Componentes/header/header.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { ProductComponent } from './Componentes/product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    QuienesSomosComponent,
    SugerenciasComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
