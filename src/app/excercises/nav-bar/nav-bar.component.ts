import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  urlParams = new URLSearchParams(window.location.search);
  usuarioSerializado = this.urlParams.get('usuario')
  changeWindow(name: string) {
    window.location.href = `${name}`;
  }
}
