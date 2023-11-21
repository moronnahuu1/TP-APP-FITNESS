import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-logged',
  templateUrl: './nav-bar-logged.component.html',
  styleUrls: ['./nav-bar-logged.component.css']
})
export class NavBarLoggedComponent {
  changeWindow(name: string) {
    window.location.href = `${name}`;
  }
  logOut() {
    localStorage.removeItem("oneUser");
    console.log("REMOVED");
    location.reload();
  }
}
