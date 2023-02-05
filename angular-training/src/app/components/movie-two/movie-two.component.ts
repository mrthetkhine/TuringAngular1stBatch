import {Component, Input} from '@angular/core';
import {MovieDto} from "../../model/movie-dto.model";
import {Router} from "@angular/router";

@Component({
  selector: '[app-movie-two]',
  templateUrl: './movie-two.component.html',
  styleUrls: ['./movie-two.component.scss']
})
export class MovieTwoComponent {
  @Input()
  movie!:MovieDto;
  constructor(private router:Router) {
  }
  movieDetails(event:any)
  {
    console.log('Movie detail click ',this.movie);
    this.router.navigate(["/movie-details/"+this.movie._id]);
  }
}
