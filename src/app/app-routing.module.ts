import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatheoComponent } from './patheo/patheo.component';

const routes: Routes = [
  {
    path: 'patheo',
    component: PatheoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
