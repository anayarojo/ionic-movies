import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../components/details/details.component';
import { Genre, MovieDetails } from '../interfaces/interfaces';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page {

  movies: MovieDetails[] = [];
  genres: Genre[] = [];
  genresMovies: any[] = [];

  constructor(public localStorageService: LocalStorageService, 
              private moviesService: MoviesService,
              private modalCtrl: ModalController) { }

  async ionViewWillEnter() {
    this.movies = await this.localStorageService.loadFavoriteMovies();
    console.log(this.movies);
    this.genres = await this.moviesService.loadGenres();
    console.log(this.genres);
    this.genresMovies = this.getGenresMovies(this.movies, this.genres);
    console.log(this.genresMovies);
  }

  getGenresMovies(movies: MovieDetails[], genres: Genre[]) {
    return genres.reduce((genresMovies: any[], genre: Genre) => {
      const filteredMovies = movies.filter(m => (m.genres || []).filter(g => g.id === genre.id).length > 0);
      if (filteredMovies.length) {
          genresMovies.push({
            genre: genre,
            movies: filteredMovies
          });
      }
      return genresMovies;
    }, []);
  }
}
