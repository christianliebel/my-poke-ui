import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {switchMap} from "rxjs";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  protected pokemon$ = this.activatedRoute.params.pipe(
    switchMap(params => this.pokemonService.getPokemon(params['id']))
  );

  constructor(private activatedRoute: ActivatedRoute,
              private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

}
