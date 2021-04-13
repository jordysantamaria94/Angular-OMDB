import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  busqueda: string;
  @Input() buscar: any;

  constructor() { }

  ngOnInit(): void {
  }

}
