import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {PageEvent} from "@angular/material/paginator";
import {BehaviorSubject, switchMap} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  protected offsetSubject = new BehaviorSubject(0);
  protected listResponse$ = this.offsetSubject.pipe(
    switchMap(offset => this.pokemonService.getAllPokemon(offset))
  );
  protected displayedColumns = ['name', 'url'];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

  onPage(event: PageEvent) {
    this.offsetSubject.next(event.pageIndex * event.pageSize);
  }
}
