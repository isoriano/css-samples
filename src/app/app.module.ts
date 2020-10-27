import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OneComponent } from './containers/one/one.component';
import { TwoComponent } from './containers/two/two.component';
import { FriendsScrollerComponent } from './components/friends-scroller/friends-scroller.component';
import { ResponsiveFormComponent } from './components/responsive-form/responsive-form.component';
import { BottomNavComponent } from './components/bottom-nav/bottom-nav.component';
import { ResponsiveLeftToBottomBavComponent } from './components/responsive-left-to-bottom-bav/responsive-left-to-bottom-bav.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    FriendsScrollerComponent,
    ResponsiveFormComponent,
    BottomNavComponent,
    ResponsiveLeftToBottomBavComponent,
    UserMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
