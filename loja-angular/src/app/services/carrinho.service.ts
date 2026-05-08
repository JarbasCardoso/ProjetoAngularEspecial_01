import { inject,Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CarrinhoModel } from "../models/carrinho.model";
import { catchError,Observable,throwError } from "rxjs";

@Injectable({providedIn:'root'})
export class CarrinhoService{
    private http =inject(HttpClient);
    private url= 'https://fakestoreapi.com/carts';

    get(): Observable<CarrinhoModel[]>{
        return this.http.get<CarrinhoModel[]>(this.url).pipe(
            catchError(erro=>{
                console.log('Erro ao buscar carrinho:',erro);
                return throwError(()=>Error ('Erro ao buscar carrinhos.'));
            })
        );
    }
    
}