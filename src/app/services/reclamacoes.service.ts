import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators'
import { IReclamacao } from '../model/IReclamacao.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class ReclamacoesService {
  private URL: string = 'http://localhost:3000/reclamacoes';

  constructor(private http: HttpClient) { }

  buscarTodos(): Observable<IReclamacao[]> {
    return this.http.get<IReclamacao[]>(this.URL);
  }

  buscarPorId(id: number): Observable<IReclamacao> {
    return this.http.get<IReclamacao>(`${this.URL}/${id}`);
  }

  cadastrar(reclamacao: IReclamacao): Observable<IReclamacao> {
    return this.http.post<IReclamacao>(this.URL, reclamacao);
  }

  atualizar(reclamacao: IReclamacao): Observable<IReclamacao> {
    return this.http.put<IReclamacao>(`${this.URL}/${reclamacao.id}`, reclamacao);
  }

  excluir(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`);
  }
}
