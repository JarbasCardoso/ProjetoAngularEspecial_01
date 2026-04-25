import { Component, OnInit,inject } from '@angular/core';
import { ClienteModel } from '../../models/cliente.model';
import { ClienteService } from '../../services/cliente.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  imports: [CommonModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes implements OnInit{
  private service =inject(ClienteService);
  listaCliente:ClienteModel[]=[];
  ngOnInit(): void {
    this.service.get().subscribe (dados=>{
      this.listaCliente=dados;
    });
  }
}
