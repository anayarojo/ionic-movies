import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const imgUrl = environment.imgUrl;
const defaultImg = environment.defaultImg;

@Pipe({
  name: 'image'
})

export class ImagePipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): any {

    if (!img) {
      return defaultImg;
    }

    const urlImage = `${imgUrl}/${size}/${img}`;
    return urlImage;
  }

}
