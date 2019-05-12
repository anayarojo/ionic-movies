import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { MoviesResponse, Movie } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../components/details/details.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  recentMovies: Movie[] = [];
  popularMovies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getRecentMovies().subscribe((respose) => {
      this.recentMovies = respose.results;
    });
    this.getPopular();
  }

  loadMore() {
    this.getPopular();
  }

  getPopular() {
    this.moviesService.getPopularMovies().subscribe((respose) => {
      const arrayTemp = [...this.popularMovies, ...respose.results];
      this.popularMovies = arrayTemp;
    });
  }
}
