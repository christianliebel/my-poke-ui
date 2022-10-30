import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListResponse, Pokemon} from "./pokemon.model";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {
  }

  getAllPokemon(offset: number = 0): Observable<ListResponse> {
    return this.httpClient.get<ListResponse>('https://pokeapi.co/api/v2/pokemon/', {
      params: {
        offset: offset.toString(),
        limit: '20',
      }
    });
  }

  getPokemon(name: string): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}/`)
  }
}
