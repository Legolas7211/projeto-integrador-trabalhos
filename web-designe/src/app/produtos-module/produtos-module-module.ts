import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosModuleRoutingModule } from './produtos-module-routing-module';
import { ListaProdutosComponent } from './lista-produtos-component/lista-produtos-component';
import { BotaoComponent } from '../shared-module/botao-component/botao-component';
import { SharedModuleModule } from '../shared-module/shared-module-module';


@NgModule({
  declarations: [
    ListaProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutosModuleRoutingModule,
    SharedModuleModule
  ]
})
export class ProdutosModuleModule { }
