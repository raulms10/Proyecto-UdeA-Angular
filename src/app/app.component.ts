import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour de los heroes';
  mensaje = 'Aquí aparecerán los héroes';

  desactivado = true;

  activar() {
    debugger;
    this.desactivado = !this.desactivado;
  }

  saludar() {
    this.title += ' Hola otra vez ';
  }
}
