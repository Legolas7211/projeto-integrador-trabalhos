import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dados } from './dados/dados';

const routes: Routes = [
  {path:'dados',component: Dados} 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionariosRoutingModule { }
