import { Component,OnInit,inject } from '@angular/core';
import { PedidoModel } from '../../models/pedido.model';
import { PedidoService } from '../../services/pedido.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-pedidos',
  imports: [CommonModule],
  templateUrl: './pedidos.html',
  styleUrl: './pedidos.css',
})
export class Pedidos implements OnInit{
  private service =  inject(PedidoService);
  listaPedidos:PedidoModel[]=[];
  ngOnInit(): void {
    this.service.get().subscribe(dados=>{
      this.listaPedidos=dados;
    });
  }   
}
