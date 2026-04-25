import {  HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { PedidoModel } from "../models/pedido.model";
import { catchError,Observable,throwError } from "rxjs";

@Injectable({providedIn:"root"})
export class PedidoService{
    private http=inject (HttpClient);
    private url = "https://jsonplaceholder.typicode.com/todos";
    get():Observable<PedidoModel[]>{
        return this.http.get<PedidoModel[]>(this.url).pipe(
            catchError(Erro=>{
                console.log("Erro ao buscar pedidos:",Erro);
                return throwError(()=>new Error ("Erro ao buscar pedidos."));
            })
        )
    }
}