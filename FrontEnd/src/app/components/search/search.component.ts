import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OmdbService } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  resultados: any;

  constructor(private serviceOmdb: OmdbService) { }

  ngOnInit(): void {
  }

  buscar = (busqueda: string) => {
    this.serviceOmdb.getQuery(`&s=${busqueda}`)
      .subscribe(response => {
        this.resultados = response['Search'];
      });
  }

}
