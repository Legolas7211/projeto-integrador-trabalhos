import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from './shared-module/shared-module-module';
import { ProdutosModuleModule } from './produtos-module/produtos-module-module';
import { FuncionariosModule } from './funcionarios/funcionarios-module';

const routes: Routes = [

  {
    path: 'estrutura',
    loadChildren: () =>import('./estrutura/estrutura-module').then (m =>m.EstruturaModule)
  },
  {
    path: 'shared-module',
    loadChildren: () =>import('./shared-module/shared-module-module').then (m =>SharedModuleModule)
  },
  {
    path: 'lista',
    loadChildren: () =>import('./produtos-module/produtos-module-module').then (m =>ProdutosModuleModule)
  },
  {
    path: 'funcionarios',
    loadChildren: () =>import('./funcionarios/funcionarios-module').then (m =>FuncionariosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
 