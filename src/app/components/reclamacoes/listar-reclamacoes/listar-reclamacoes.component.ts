import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReclamacoesService } from '../../../services/reclamacoes.service';
import { IReclamacao } from '../../../model/IReclamacao.model';

@Component({
  selector: 'app-listar-reclamacoes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [ReclamacoesService],
  templateUrl: './listar-reclamacoes.component.html',
  styleUrl: './listar-reclamacoes.component.css'
})
export class ListarReclamacoesComponent implements OnInit{

  listaReclamacoes: IReclamacao[] = []

  constructor(private reclamacoesService: ReclamacoesService) {
    
  }

  ngOnInit(): void {
    this.carregarReclamacoes();
  }

  carregarReclamacoes(): void {
    this.reclamacoesService.buscarTodos().subscribe(retorno => {
      this.listaReclamacoes = retorno;
    })
  }

  deletar(reclamacao: IReclamacao): void {
    this.reclamacoesService.excluir(reclamacao.id!).subscribe();
    this.carregarReclamacoes();
  }
}
