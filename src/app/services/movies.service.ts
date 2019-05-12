import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesResponse, MovieDetails, CreditsResponse, Genre } from '../interfaces/interfaces';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private popularPage = 0;

  constructor(private http: HttpClient) { }

  getMovieDetails(id: string) {
    return this.getQuery<MovieDetails>(`/movie/${id}?a=1`);
  }

  getMovieActors(id: string) {
    return this.getQuery<CreditsResponse>(`/movie/${id}/credits?a=1`);
  }

  searchMovie(text: string) {
    return this.getQuery<MoviesResponse>(`/search/movie?query=${text}`);
  }

  getPopularMovies() {
    this.popularPage++;
    return this.getQuery<MoviesResponse>(`/discover/movie?sort_by=popularity.desc&page=${this.popularPage}`);
  }

  getRecentMovies() {
    const today = new Date();
    const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

    const month = today.getMonth() + 1;
    const strMonth = month < 10 ? '0' + month : '' + month;

    const strStarDate = `${today.getFullYear()}-${strMonth}-01`;
    const strEndDate = `${today.getFullYear()}-${strMonth}-${lastDay}`;

    return this.getQuery<MoviesResponse>(`/discover/movie?primary_release_date.gte=${strStarDate}&primary_release_date.lte=${strEndDate}`);
  }

  loadGenres(): Promise<Genre[]> {
    return new Promise(resolve => {
      this.getQuery<any>(`/genre/movie/list?a=1`).subscribe(response => {
        resolve(response.genres);
      });
    });
  }

  private getQuery<T>(query: string) {
    query = apiUrl + query;
    query += `&api_key=${apiKey}&language=es&include_image_language=es`;
    return this.http.get<T>(query);
  }
}
