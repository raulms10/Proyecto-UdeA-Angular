import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaVillanosComponent } from './lista-villanos/lista-villanos.component';
import { CompartidoModule } from '../compartido/compartido.module';

@NgModule({
  declarations: [ListaVillanosComponent],
  imports: [
    CommonModule, 
    CompartidoModule
  ], 
  exports: [ListaVillanosComponent]
})
export class VillanosModule { }
