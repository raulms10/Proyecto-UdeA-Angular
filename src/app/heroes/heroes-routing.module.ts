import { HeroesComponent } from './heroes/heroes.component';
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallesHeroesComponent } from './detalles-heroes/detalles-heroes.component';


const heroesRoutes: Routes = [
  { path: '', component:HeroesComponent },
  // { path: ':id', component:DetallesHeroesComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
