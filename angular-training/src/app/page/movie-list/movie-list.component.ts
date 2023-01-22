import { Component } from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {MovieDto} from "../../model/movie-dto.model";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
   movies :Array<MovieDto> = [];
  constructor(private movieService: MovieService) {
    this.movieService.movies.subscribe(data=>{
      this.movies = data;
    });
  }
}
