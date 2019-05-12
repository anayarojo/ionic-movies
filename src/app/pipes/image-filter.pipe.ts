import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFilter'
})
export class ImageFilterPipe implements PipeTransform {

  transform(movies: any[]): any[] {
    return movies.filter(m => {
      return m.backdrop_path;
    });
  }

}
