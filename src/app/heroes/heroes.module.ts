import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AgregarHeroeComponent } from './agregar-heroe/agregar-heroe.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { DetallesHeroesComponent } from './detalles-heroes/detalles-heroes.component';
import { CompartidoModule } from '../compartido/compartido.module';

@NgModule({
  declarations: [
    HeroesComponent,
    AgregarHeroeComponent,
    DetallesHeroesComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatTableModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CompartidoModule
  ],
  exports: [HeroesComponent, DetallesHeroesComponent]
})
export class HeroesModule { }
