import { Component, inject, OnInit } from '@angular/core';
import { CarrinhoModel } from '../../models/carrinho.model';
import { CarrinhoService } from '../../services/carrinho.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-carrinhos',
  imports: [CommonModule],
  templateUrl: './lista-carrinhos.html',
  styleUrl: './lista-carrinhos.css'
})
export class ListaCarrinhos implements OnInit {
  carrinhos: CarrinhoModel[] = [];
  private service = inject(CarrinhoService);

  ngOnInit(): void {
    this.service.get().subscribe(dados => {
      this.carrinhos = dados;
    });
  }
}