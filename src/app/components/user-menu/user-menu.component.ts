import { Component } from '@angular/core';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent {

  open: boolean;

  switchOpen() {
    this.open = !this.open;
  }
}
