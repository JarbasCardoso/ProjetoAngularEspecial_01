import { Routes } from '@angular/router';
import { ListaProdutos } from './components/lista-produtos/lista-produtos';
import { ListaCarrinhos } from './components/lista-carrinhos/lista-carrinhos';
import { ListaUsuarios } from './components/lista-usuarios/lista-usuarios';

export const routes: Routes = [

    {path:'' , redirectTo: 'produtos',pathMatch:'full'},
    {path: 'produtos', component: ListaProdutos},
    {path: 'carrinhos', component: ListaCarrinhos},
    {path:'usuarios', component:ListaUsuarios}
];
