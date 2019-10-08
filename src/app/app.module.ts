import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesModule } from './heroes/heroes.module';
import { MessagesModule } from './messages/messages.module';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes/heroes.component';
import { ListaVillanosComponent } from './villanos/lista-villanos/lista-villanos.component';
import { VillanosModule } from './villanos/villanos.module';
import { IngresarVillanosComponent } from './villanos/ingresar-villanos/ingresar-villanos.component';

const appRoutes: Routes = [
  // {path: 'heroes', component: HeroesComponent},
  {path: 'heroes', loadChildren: () => import('./heroes/heroes.module').then(mod => mod.HeroesModule)},
  {path: 'villanos', component: ListaVillanosComponent},
  {path: 'nuevo-heroe', component: IngresarVillanosComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ], // Los componentes que pertenecen al modulo
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MessagesModule,
    VillanosModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}) //tracing es para el log
  ], // Lo que requiere el modulo para funcionar
  exports: [], // LO que se va a mostrar para otros modulos
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
