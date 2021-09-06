import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema} from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private http: HttpClient,
    ) {}
    token = {
      headers: new HttpHeaders().set("Authorization", environment.token)
    }
  
  getAllTema(): Observable<Tema[]> {
    return this.http.get<Tema[]>("https://blogfelipeho.herokuapp.com/temas", this.token)
  }
  getByIdTema(id:number):Observable<Tema>{    
    return this.http.get<Tema>(`https://blogfelipeho.herokuapp.com/temas/${id}`,this.token)
  }
  postTema(tema:Tema):Observable<Tema>{
    return this.http.post<Tema>("https://blogfelipeho.herokuapp.com/temas",tema,this.token)
  }
  putTema(tema:Tema):Observable<Tema>{
    return this.http.put<Tema>("https://blogfelipeho.herokuapp.com/temas",tema,this.token)
  }
  delete(id:number){
    return this.http.delete(`https://blogfelipeho.herokuapp.com/temas/${id}`,this.token)
  }
}
