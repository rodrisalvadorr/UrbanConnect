import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { ReclamacoesService } from '../../../services/reclamacoes.service';
import { IReclamacao } from '../../../model/IReclamacao.model';

@Component({
  selector: 'app-incluir-reclamacao',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  providers: [ReclamacoesService],
  templateUrl: './incluir-reclamacao.component.html',
  styleUrl: './incluir-reclamacao.component.css'
})

export class IncluirReclamacaoComponent {

  reclamacao: IReclamacao = {
    problem: '',
    location: '',
    description: '',
    status: ''
  }

  constructor(private reclamacaoService: ReclamacoesService, private router: Router) {

  }

  salvarProduto(): void {
    this.reclamacaoService.cadastrar(this.reclamacao).subscribe(retorno => {
      this.reclamacao = retorno;
    });
    alert('Reclamação salva com sucesso!');
    this.router.navigate(["/reclamacoes"]);
  }
}
