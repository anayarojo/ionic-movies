import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../components/details/details.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit{

  ideas: string[] = ['Spiderman', 'Avenger', 'El señor de los anillos', 'La vida es bella'];
  movies: Movie[] = [];
  searchText = '';
  searching = false;
  
  constructor(private moviesService: MoviesService, private modalCtrl: ModalController) { }

  ngOnInit() {

  }

  search(event) {
    const value = event.detail.value;

    if (value.length === 0) {
      this.searching = false;
      this.movies = [];
      return;
    }

    this.searching = true;
    this.moviesService.searchMovie(value).subscribe(response => {
      this.movies = response.results;
      this.searching = false;
    });
  }

  async showDetails(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: { id }
    });
    return await modal.present();
  }
}
