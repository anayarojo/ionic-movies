import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { PipesModule } from '../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowPairComponent } from './slideshow-pair/slideshow-pair.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  entryComponents: [
    DetailsComponent
  ],
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPairComponent,
    DetailsComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPairComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
  ]
})
export class ComponentsModule { }
