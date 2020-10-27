import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-responsive-left-to-bottom-bav',
  templateUrl: './responsive-left-to-bottom-bav.component.html',
  styleUrls: ['./responsive-left-to-bottom-bav.component.scss']
})
export class ResponsiveLeftToBottomBavComponent implements OnInit {

  hover = false;
  squeezeMain = false;
  constructor() { }

  ngOnInit(): void {
  }

  switchHover(hover: boolean) {
    this.squeezeMain = hover;
    setTimeout(() => this.hover = hover, 600);
  }
}
