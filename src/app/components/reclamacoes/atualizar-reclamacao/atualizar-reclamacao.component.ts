import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IReclamacao } from '../../../model/IReclamacao.model';
import { ReclamacoesService } from '../../../services/reclamacoes.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-atualizar-reclamacao',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  providers: [ReclamacoesService],
  templateUrl: './atualizar-reclamacao.component.html',
  styleUrl: './atualizar-reclamacao.component.css'
})

export class AtualizarReclamacaoComponent implements OnInit {
  
  reclamacao: IReclamacao = {
    problem: '',
    location: '',
    description: '',
    status: ''
  }

  constructor(private reclamacaoService: ReclamacoesService, private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.reclamacaoService.buscarPorId(id).subscribe(retorno => {
      this.reclamacao = retorno;
    })
  }

  salvarProduto(): void {
    this.reclamacaoService.atualizar(this.reclamacao).subscribe(retorno => {
      this.reclamacao = retorno;
    });
    alert('Reclamação atualiza com sucesso!');
    this.router.navigate(["/reclamacoes"]);
  }
}
