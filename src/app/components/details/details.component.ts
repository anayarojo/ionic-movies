import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieDetails, Crew, Cast } from 'src/app/interfaces/interfaces';
import { ModalController, ToastController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  @Input() id: string;

  movie: MovieDetails = {};
  favorite = false;
  actors: Cast[] = [];
  sliceLenght = 50;

  slideActorsOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5
  };

  constructor(private modalCtrl: ModalController, 
              private moviesService: MoviesService, 
              private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.moviesService.getMovieDetails(this.id).subscribe((response) => {
      this.movie = response;
    });
    this.moviesService.getMovieActors(this.id).subscribe((response) => {
      this.actors = response.cast;
    });
    this.localStorageService.isFavorite(this.id).then(favorite => {
      this.favorite = favorite;
    });
  }

  clickBack() {
    this.modalCtrl.dismiss();
  }

  clickfavorite() {
    this.favorite = this.localStorageService.favoriteMovieToggle(this.movie);
  }

}
