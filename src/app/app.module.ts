import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './containers/one/one.component';
import { TwoComponent } from './containers/two/two.component';
import { FriendsScrollerComponent } from './components/friends-scroller/friends-scroller.component';
import { ResponsiveFormComponent } from './components/responsive-form/responsive-form.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { ResponsiveLeftToBottomNavComponent } from './components/responsive-left-to-bottom-nav/responsive-left-to-bottom-nav.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { TimerComponent } from './components/timer/timer.component';
import { ThreeComponent } from './containers/three/three.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    FriendsScrollerComponent,
    ResponsiveFormComponent,
    BottomNavComponent,
    ResponsiveLeftToBottomNavComponent,
    UserMenuComponent,
    TimerComponent,
    ThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
