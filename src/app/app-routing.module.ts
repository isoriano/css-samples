import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OneComponent } from './containers/one/one.component';
import { ThreeComponent } from './containers/three/three.component';
import { TwoComponent } from './containers/two/two.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '1'
  },
  {
    path: '1',
    component: OneComponent
  },
  {
    path: '2',
    component: TwoComponent
  },
  {
    path: '3',
    component: ThreeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
