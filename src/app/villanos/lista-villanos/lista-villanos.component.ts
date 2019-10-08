import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/heroes/shared/hero.model';

@Component({
  selector: 'app-lista-villanos',
  templateUrl: './lista-villanos.component.html',
  styleUrls: ['./lista-villanos.component.css']
})
export class ListaVillanosComponent implements OnInit {

  constructor() { }
  hero: Hero = {id:0, nombre:""};
  lugares = ['Agua', 'Aire', 'Arboles', 'Tierra'];

  ngOnInit() {
    this.hero.valorUnitario = 12;
    this.hero.cantidad = 1;
    this.calcularTotal();
  }
  
  calcularTotal(){
    this.hero.total=this.hero.valorUnitario * this.hero.cantidad;
  }
  
  insertar() {
    console.log(['Datos a enviar', this.hero])
  } 
}
