import { Component,OnInit,inject } from '@angular/core';
import { ProdutoModel } from '../../models/produto.model';
import { ProdutoService } from '../../services/produto.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-produtos',
  imports: [CommonModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos implements OnInit{
  private service=inject(ProdutoService);
  listaProdutos:ProdutoModel[]=[];
  ngOnInit(): void {
    this.service.get().subscribe(dados=>{

      this.listaProdutos=dados;
    });
  }   
}
