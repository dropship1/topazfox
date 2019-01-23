import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {WorldComponent } from './world/world.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'world', component: WorldComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
