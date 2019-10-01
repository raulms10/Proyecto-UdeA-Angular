import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../shared/hero.service';
import { Hero } from '../shared/hero.model';

@Component({
  selector: 'app-detalles-heroes',
  templateUrl: './detalles-heroes.component.html',
  styleUrls: ['./detalles-heroes.component.css']
})
export class DetallesHeroesComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private heroService: HeroService,
    private router: Router) { }

  @Input() hero: Hero;

  ngOnInit() {
    this.route.params.subscribe(
      param=> {
      if (param['id']) {
        this.heroService.obtenerHeroes().subscribe(
          heroes=> this.hero = heroes.find(heroe=>  String(heroe.id) == param['id']));
      }});
    console.log(['Heroe, ', this.hero]);
  }
  
  

}
