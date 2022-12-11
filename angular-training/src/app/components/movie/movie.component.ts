import {Component, Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  _movieTitle = '';
  @Input()
  get movie(): string { return this._movieTitle; }
  set movie(movie: string) {
    console.log('Setter movie ',movie);
    this._movieTitle = movie ;
  }

  @Output()
  deleteMovie = new EventEmitter<string>();

  ngOnChanges()
  {
    console.log("Movie onChange");
  }
  onDeleteHandler()
  {
    console.log('OnDelete ',this.movie);
    this.deleteMovie.emit(this.movie);
  }
}
