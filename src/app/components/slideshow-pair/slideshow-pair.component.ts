import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-slideshow-pair',
  templateUrl: './slideshow-pair.component.html',
  styleUrls: ['./slideshow-pair.component.scss'],
})

export class SlideshowPairComponent implements OnInit {

  @Input() movies: Movie[] = [];
  @Output() loadMore = new EventEmitter();

  slideOpts = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -10
  };

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  loadMoreClick() {
    this.loadMore.emit();
  }

  async showDetails(id: string) {
    const modal = await this.modalCtrl.create({
      component: DetailsComponent,
      componentProps: { id }
    });
    return await modal.present();
  }
}
