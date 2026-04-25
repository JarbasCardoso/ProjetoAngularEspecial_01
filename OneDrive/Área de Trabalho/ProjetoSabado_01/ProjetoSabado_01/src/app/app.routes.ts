import { Routes } from '@angular/router';
import { Clientes } from './components/clientes/clientes';
import { Produtos } from './components/produtos/produtos';
import { Pedidos } from './components/pedidos/pedidos';

export const routes: Routes = [
    { path: '' , redirectTo: 'clientes', pathMatch:'full'},
    { path: 'clientes', component: Clientes},
    {path: 'produtos', component: Produtos},
    {path: 'pedidos', component: Pedidos}
    
];
