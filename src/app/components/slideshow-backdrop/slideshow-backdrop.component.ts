import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})

export class SlideshowBackdropComponent implements OnInit {

  @Input() movies: Movie[] = [];

  slideOpts = {
    slidesPerView: 1.5,
    freeMode: true
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async showDetails(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: { id }
    });
    return await modal.present();
  }

}
