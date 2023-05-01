import { ResponseI } from '../models/response-i';

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const urlBase="http://localhost:8085/usuario"

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  getAllUsuario():Observable<ResponseI>{
    return this.http.get<ResponseI>(urlBase+"/all")
  }
  
}
