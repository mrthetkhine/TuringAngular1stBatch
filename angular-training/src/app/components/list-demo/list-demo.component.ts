import { Component } from '@angular/core';
import {DummyMovieService} from "../../services/dummy-movie.service";

@Component({
  selector: 'app-list-demo',
  templateUrl: './list-demo.component.html',
  styleUrls: ['./list-demo.component.scss']
})
export class ListDemoComponent {
  movies:Array<string> = [];

  constructor(movieService :DummyMovieService) {
    this.movies = movieService.getMovieList();
  }
  addMovieHandler()
  {
    this.movies.push('Movie '+(this.movies.length+1));
  }
  ngOnChanges()
  {
    console.log("ListDemoComponent onChange");
  }
  onChildMovieDelete(movieName:string)
  {
    console.log("OnParent movie delete ",movieName);
    let index = this.movies.indexOf(movieName);
    this.movies.splice(index,1);
  }
}
