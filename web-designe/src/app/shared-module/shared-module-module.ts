import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModuleRoutingModule } from './shared-module-routing-module';
import { BotaoComponent } from './botao-component/botao-component';


@NgModule({
  declarations: [
    BotaoComponent
  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule
  ],
  exports: [
    BotaoComponent
  ]
})
export class SharedModuleModule { }
