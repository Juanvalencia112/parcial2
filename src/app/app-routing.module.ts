import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecetaPipe } from './receta.pipe';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  })
export class AppRoutingModule { }
