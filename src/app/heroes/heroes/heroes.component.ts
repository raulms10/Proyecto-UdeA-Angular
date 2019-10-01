import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero.model';
import { HeroService } from '../shared/hero.service';
import { MessageService } from 'src/app/messages/shared/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService, 
              private messageService: MessageService) { }

  heroes: Hero[];
  selectedHero: Hero;
  mostrarLista = true;

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero) {
    if (this.selectedHero === hero) {
      this.messageService.add('Heroe deseleccionado: ' + hero.nombre);
      this.selectedHero = undefined;
    } else {
      this.messageService.add('Heroe seleccionado: ' + hero.nombre);
      this.selectedHero = hero;
    } 
  }

  getHeroes():void {
    this.heroService.obtenerHeroes().subscribe(heroes => this.heroes = heroes);
  }
  
  guardarHeroe() {
    this.heroService.actualizarHeroe(this.selectedHero).subscribe(res => {
      console.log(['respuesta', res]);
      if (res.ok) {
        this.messageService.add('Heroe actualizado a ' + this.selectedHero.nombre);
      }
    });
  }
  
  insertado(ins: boolean) {
    this.getHeroes();
    this.mostrarLista = true;
  }

}
