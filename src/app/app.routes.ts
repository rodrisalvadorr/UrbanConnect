import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { IncluirReclamacaoComponent } from './components/reclamacoes/incluir-reclamacao/incluir-reclamacao.component';
import { ListarReclamacoesComponent } from './components/reclamacoes/listar-reclamacoes/listar-reclamacoes.component';
import { AtualizarReclamacaoComponent } from './components/reclamacoes/atualizar-reclamacao/atualizar-reclamacao.component';

export const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'reclamacoes', component: ListarReclamacoesComponent},
  {path:'reclamacoes/incluir', component: IncluirReclamacaoComponent},
  {path:'reclamacoes/atualizar/:id', component: AtualizarReclamacaoComponent}
];
