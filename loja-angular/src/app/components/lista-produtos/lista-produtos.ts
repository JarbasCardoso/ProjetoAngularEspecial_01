import { Component, inject, OnInit } from '@angular/core';
import { ProdutoModel } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-lista-produtos',
  imports: [CommonModule],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos implements OnInit {
  produtos: ProdutoModel[] = [];
  private service = inject(ProdutoService);

  ngOnInit(): void {
    this.service.get().subscribe(dados => {
      this.produtos = dados;
    });
  }
}