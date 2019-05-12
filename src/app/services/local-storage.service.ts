import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { MovieDetails } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  favoriteMovies: MovieDetails[] = [];

  constructor(private toastCtrl: ToastController, 
              private storage: Storage) {
  }

  async loadFavoriteMovies() {
    const favoriteMovies = await this.storage.get('favorite_movies');
    this.favoriteMovies = favoriteMovies || [];
    return this.favoriteMovies;
  }

  async isFavorite(id: string) {
    this.favoriteMovies = await this.loadFavoriteMovies();
    return this.favoriteMovies.filter(m => m.id === Number(id)).length > 0;
  }

  favoriteMovieToggle(movie: MovieDetails) {
    const exists = this.favoriteMovies.filter(m => m.id === movie.id).length > 0;

    if (exists) {
      this.favoriteMovies = this.favoriteMovies.filter(m => m.id !== movie.id);
      this.showToast('Removed from favorites');
    } else {
      this.favoriteMovies.push(movie);
      this.showToast('Added to favorites');
    }
    this.storage.set('favorite_movies', this.favoriteMovies);
    return !exists;
  }

  async showToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'bottom',
    });
    toast.present();
  }

}
