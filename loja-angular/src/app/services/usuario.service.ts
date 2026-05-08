import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { UsuarioModel } from "../models/usuario.model";
import { catchError,Observable,throwError } from "rxjs";

@Injectable ({providedIn:'root'})
export class UsuarioService {
    private http= inject (HttpClient);
    private url= 'https://fakestoreapi.com/users';

    get():Observable<UsuarioModel[]>{
        return this.http.get<UsuarioModel[]>(this.url).pipe(
            catchError(erro=>{
                console.log('Erro ao buscar usuarios:',erro);
                return throwError(()=> Error('Erro ao buscar usuarios.'));
            })
        );
    }
}
