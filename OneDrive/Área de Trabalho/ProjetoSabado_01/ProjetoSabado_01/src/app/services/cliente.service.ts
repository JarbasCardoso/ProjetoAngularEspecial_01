import { HttpClient } from "@angular/common/http";
import { inject ,Injectable} from "@angular/core";
import { ClienteModel } from "../models/cliente.model";
import { catchError,Observable,throwError } from "rxjs";

@Injectable({providedIn:"root"})
export class ClienteService {

    private http=inject(HttpClient);
    private url="https://jsonplaceholder.typicode.com/users"

    get():Observable<ClienteModel[]>{
          return this.http.get<ClienteModel[]>(this.url).pipe(
            catchError(Erro=>{
                console.log("Erro ao buscar clientes:",Erro);
                return throwError(()=>new Error ("Erro ao buscar clientes."));
            })
          )
    }
}