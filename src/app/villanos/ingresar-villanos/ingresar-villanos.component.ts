import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/heroes/shared/hero.model';

@Component({
  selector: 'app-ingresar-villanos',
  templateUrl: './ingresar-villanos.component.html',
  styleUrls: ['./ingresar-villanos.component.css']
})
export class IngresarVillanosComponent implements OnInit {
  
  heros : Hero[] = [];
 
  id :number = 1;
  constructor() { }

  ngOnInit() {
  }
  
  crear(){
    this.heros.push({id: ++this.id, nombre:""})
  }
 
  insertar() {
    console.log(['Villanos a enviar', this.heros])
  } a
}
