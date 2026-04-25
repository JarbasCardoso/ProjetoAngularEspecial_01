import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { ProdutoModel } from "../models/produto.model";
import { catchError,Observable,throwError } from "rxjs";

@Injectable({providedIn:"root"})
export class ProdutoService {
    private http=inject(HttpClient);
    private url="https://jsonplaceholder.typicode.com/posts";
     get():Observable<ProdutoModel[]>{
        return this.http.get<ProdutoModel[]>(this.url).pipe(
            catchError(Erro=>{
                console.log("Erro ao buscar produtos:",Erro);
                return throwError(() =>new Erro ("Erro ao buscar produtos."));
            })
        )
     }
}