import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Pruebas aplicacion heroes', () => {
  // Option1
  // beforeAll(() => browser.get(''));
  // describe('Initial page', pruebasFuncionales);
  
  // Option 2
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Debe tener el titulo de la pagina igual a ProyectoUdea', () => {
    page.navigateTo();
    // expect(page.getTitleText()).toEqual('ProyectoUdea');
    expect(page.getTituloText()).toEqual('ProyectoUdea');
  });

  it('Debe tener el encabezado igual a Tour de los heroes', () => {
    page.navigateTo();
    expect(page.getEncabezadoText()).toEqual('Tour de los heroes');
    // expect(browser.getTitle()).toEqual('ProyectoUdea');
  });

  it('Debe cargar componentes de Villanos al dar clic', () => {
    page.navigateTo();
    page.darClicVillanosById();
    // browser.pause();
    // browser.sleep(5000); // Se detiene por 5 segundos
    expect(page.obtenerCompVillanos().isDisplayed()).toBeTruthy();
  });
  
  // it('Debe cargar componentes de detalles al dar clic en heroe', () => {
  //   page.navigateTo();
  //   let heros = page.obtenerListaHeroes();
    
  //   // browser.pause();
  //   // browser.sleep(5000); // Se detiene por 5 segundos
  //   expect(page.obtenerCompVillanos().isDisplayed()).toBeTruthy();
  // });

  // it('debería ser viisible el componente de editar heroe al dar clic en el heroe', () => {
  //   page.navigateTo();
  //   page.darClickHeroes();
  //   let heroes = page.obtenerListaDeHeroes();
  //   heroes.first().click();
  //   expect(page.obtenerComponenteDeEdicionHeroes().isDisplayed).toBeTruthy();
  //   browser.sleep(6000);
  // });
 

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });

  // function pruebasFuncionales() {
  //   it('debe tener el titulo de la pagina igual a ProyectoUdea', () => {
  //     page.navigateTo();
  //     expect(page.getTitleText()).toEqual('ProyectoUdea');
  //   });
  // }
});
