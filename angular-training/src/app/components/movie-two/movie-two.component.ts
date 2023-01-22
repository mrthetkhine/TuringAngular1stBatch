import {Component, Input} from '@angular/core';
import {MovieDto} from "../../model/movie-dto.model";

@Component({
  selector: '[app-movie-two]',
  templateUrl: './movie-two.component.html',
  styleUrls: ['./movie-two.component.scss']
})
export class MovieTwoComponent {
  @Input()
  movie!:MovieDto;

  movieDetails(movie:MovieDto)
  {
    console.log('Movie detail click ',movie);
  }
}
