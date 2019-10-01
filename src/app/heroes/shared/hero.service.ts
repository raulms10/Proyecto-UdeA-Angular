import { Injectable } from '@angular/core';
import { Hero } from './hero.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HEROES } from './mock-hero';
import { Observable, of } from 'rxjs';
import { MessageService } from '../../messages/shared/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService,
    private http: HttpClient) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: heroes consultados');
    return of(HEROES);
  }
  
  obtenerHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: heroes consultados de WS');
    return this.http.get<any>("/pruebas/php_heroes/?app=heroes").pipe(
      map(res => res.lst)
    );
  }
  
  actualizarHeroe(hero: Hero): Observable<any> {
    this.messageService.add('HeroService: heroe actualizado con WS');
    return this.http.put("/pruebas/php_heroes/?app=heroes", hero, {});
  }
  
  guardarHeroe(hero: Hero): Observable<any> {
    this.messageService.add('HeroService: heroe guardado con WS');
    return this.http.post("/pruebas/php_heroes/?app=heroes", hero, {});
  }

  eliminarHeroe(id: number): Observable<any> {
    this.messageService.add('HeroService: heroe eliminado con WS');
    return this.http.delete("/pruebas/php_heroes/?app=heroes?id="+id, {});
  }
}
