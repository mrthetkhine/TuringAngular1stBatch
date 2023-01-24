import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";
import {ToDoItem} from "../model/to-do-item.model";
import {MovieDetails, MovieDto} from "../model/movie-dto.model";
import {HOST_URL} from '../../config/Api';

const API_URL = HOST_URL+"/movies";
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _movies: BehaviorSubject<MovieDto[]>;
  movieStore :Array<MovieDto>  = [];

  constructor(public http: HttpClient) {
    this._movies = <BehaviorSubject<MovieDto[]>>new BehaviorSubject<MovieDto[]>([]);
    this.loadAllMovie();
  }
  loadAllMovie()
  {
    this.getAllMovies().subscribe(data=>{
      this.movieStore = data;
      this._movies.next(this.movieStore);
    });
  }
  get movies() {
    return this._movies.asObservable();
  }
  getMovieById(id:string)
  {
    return this.http.get<MovieDetails>(API_URL+`/${id}`);
  }
  getAllMovies()
  {
    return this.http.get<Array<MovieDto>>(API_URL);
  }
  addNewMovie(movie:any)
  {
    return this.http.post<MovieDetails>(API_URL,movie)
      .subscribe(data=>{
        this.movieStore.unshift(data);
        this._movies.next(this.movieStore);
      });
  }
}
