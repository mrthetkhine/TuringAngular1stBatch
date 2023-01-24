import {Component, Input} from '@angular/core';
import {MovieDetails} from "../../model/movie-dto.model";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  @Input()
  movieDetails!:MovieDetails;
}
