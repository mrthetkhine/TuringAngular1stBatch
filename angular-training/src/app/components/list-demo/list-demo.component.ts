import { Component } from '@angular/core';

@Component({
  selector: 'app-list-demo',
  templateUrl: './list-demo.component.html',
  styleUrls: ['./list-demo.component.scss']
})
export class ListDemoComponent {
  movies = ["Titanic","Matrix","Jhon Wick"];

  addMovieHandler()
  {
    this.movies.push('Movie '+(this.movies.length+1));
  }
  onChildMovieDelete(movieName:string)
  {
    console.log("OnParent movie delete ",movieName);
    let index = this.movies.indexOf(movieName);
    this.movies.splice(index,1);
  }
}
