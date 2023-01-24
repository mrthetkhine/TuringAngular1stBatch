import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ToDoBackendService} from "../../services/to-do-backend.service";
import {MovieDetails} from "../../model/movie-dto.model";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent {
  id:string = '';
  movieDetail! :MovieDetails;
  constructor(private activateRoute:ActivatedRoute,
              private movieService: MovieService) {

  }
  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.id = params['movieId'];
      console.log('Movie Detail Id ',this.id);
      this.movieService.getMovieById(this.id).subscribe(movieDetail=>{
        this.movieDetail = movieDetail;
        console.log('MovieDetail ',this.movieDetail);
      });
    });
  }
}
