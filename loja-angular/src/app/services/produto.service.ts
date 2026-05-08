import { HttpClient } from "@angular/common/http";
import { inject,Injectable } from "@angular/core";
import { ProdutoModel } from "../models/produto.model";
import { catchError,Observable,throwError } from "rxjs";

@Injectable({providedIn:'root'})

export class ProdutoService{
    private http= inject(HttpClient);
    private url='https://fakestoreapi.com/products';

    get():Observable<ProdutoModel[]>{
        return this.http.get<ProdutoModel[]>(this.url).pipe(
            catchError(erro=>{
                console.log('Erro ao buscar produtos:', erro);
                return throwError(()=> Error ('Erro ao buscar produtos.'));
            })
        );
    }
}