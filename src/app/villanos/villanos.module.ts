import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaVillanosComponent } from './lista-villanos/lista-villanos.component';
import { CompartidoModule } from '../compartido/compartido.module';
import { FormsModule }   from '@angular/forms';
import { IngresarVillanosComponent } from './ingresar-villanos/ingresar-villanos.component';

@NgModule({
  declarations: [ListaVillanosComponent, IngresarVillanosComponent],
  imports: [
    CommonModule, 
    CompartidoModule,
    FormsModule
  ], 
  exports: [ListaVillanosComponent]
})
export class VillanosModule { }
