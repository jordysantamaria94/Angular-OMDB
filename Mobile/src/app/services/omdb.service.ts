import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OmdbService {

  url = "https://www.omdbapi.com/?apikey=dbcc268";

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `${this.url}${query}`;
    return this.http.get(url);
  }

  getDetailMovie(id: string) {
    return this.getQuery(`&i=${id}&plot=full`);
  }
}
