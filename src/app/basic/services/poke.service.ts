import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Poke } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  constructor(private http: HttpClient) { }


  getPoke(id: number): Observable<Poke> { 

    return this.http.get<Poke>(`https://pokeapi.co/api/v2/pokemon/${id}`)

  }


}
