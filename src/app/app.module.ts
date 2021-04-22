import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { SugerenciasComponent } from './sugerencias/sugerencias.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    QuienesSomosComponent,
    SugerenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
