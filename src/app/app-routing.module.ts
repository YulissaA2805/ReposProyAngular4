import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from "./principal/principal.component";
import { QuienesSomosComponent } from "./quienes-somos/quienes-somos.component";
import { SugerenciasComponent } from "./sugerencias/sugerencias.component";

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'quienessomos', component: QuienesSomosComponent},
  {path: 'sugerencias', component: SugerenciasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
