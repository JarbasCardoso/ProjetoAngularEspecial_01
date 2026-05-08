import { Component, inject, OnInit } from '@angular/core';
import { UsuarioModel } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-usuarios',
  imports: [CommonModule],
  templateUrl: './lista-usuarios.html',
  styleUrl: './lista-usuarios.css'
})
export class ListaUsuarios implements OnInit {
  usuarios: UsuarioModel[] = [];
  private service = inject(UsuarioService);

  ngOnInit(): void {
    this.service.get().subscribe(dados => {
      this.usuarios = dados;
    });
  }
}