import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTituloText() {
    return browser.getTitle() as Promise<string>;;
  }

  getEncabezadoText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  darClicVillanosById() {
    return element(by.id('irVillano')).click();
  }
  
  obtenerListaHeroes() {
    return element.all(by.css('app-heroes li')); // Todos los li dentro de app-heroes
  }

  obtenerCompHeroesDetalle() {
    return element(by.css('app-lista-villanos'));
  }
  
  obtenerCompVillanos() {
    return element(by.css('app-lista-villanos'));
  }
  
  obtenerComponenteDeHeroes(){
    return element(by.css('app-heroes'));
  }
 
  obtenerListaDeHeroes(){
    return element.all(by.css('app-heroes li'));
  }
  
  obtenerComponenteDeEdicionHeroes(){
    return element(by.css('app-hero-detail'));
  }
}
