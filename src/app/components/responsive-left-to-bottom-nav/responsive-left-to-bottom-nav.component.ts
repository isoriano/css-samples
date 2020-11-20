import { Component } from '@angular/core';

@Component({
  selector: 'app-responsive-left-to-bottom-nav',
  templateUrl: './responsive-left-to-bottom-nav.component.html',
  styleUrls: ['./responsive-left-to-bottom-nav.component.scss']
})
export class ResponsiveLeftToBottomNavComponent {

  hover = false;
  squeezeMain = false;

  switchHover(hover: boolean) {
    this.squeezeMain = hover;
    setTimeout(() => this.hover = hover, 600);
  }
}
