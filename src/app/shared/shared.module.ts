import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardReclamacaoComponent } from './components/card-reclamacao/card-reclamacao.component';



@NgModule({
  declarations: [
    CardReclamacaoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardReclamacaoComponent
  ]
})
export class SharedModule { }
