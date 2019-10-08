import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../shared/hero.model';
import { HeroService } from '../shared/hero.service';
import { MessageService } from '../../messages/shared/message.service';

@Component({
  selector: 'app-agregar-heroe',
  templateUrl: './agregar-heroe.component.html',
  styleUrls: ['./agregar-heroe.component.css']
})
export class AgregarHeroeComponent implements OnInit {

  constructor(private heroService: HeroService, 
    private messageService: MessageService) { }

  hero: Hero;
  @Output() heroeInsertado = new EventEmitter<boolean>(); 

  ngOnInit() {
    this.hero = {id:0, nombre:""};
  }
  
  guardarHeroe() {
    this.heroService.guardarHeroe(this.hero).subscribe(res => {
      console.log(['respuesta', res]);
      if (res.ok) {
        this.messageService.add('Heroe ' + this.hero.nombre + ' insertado');
        this.heroeInsertado.emit(true);
      }
    });
  }

}
