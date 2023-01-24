import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Actor, Director} from "../model/movie-dto.model";
import {HttpClient} from "@angular/common/http";
import {HOST_URL} from "../../config/Api";
const API_URL = HOST_URL+"/directors";
@Injectable({
  providedIn: 'root'
})
export class DirectorService {

  private _directors: BehaviorSubject<Director[]>;
  directorStore :Array<Director>  = [];

  constructor(public http: HttpClient) {
    this._directors = <BehaviorSubject<Director[]>>new BehaviorSubject<Director[]>([]);
    this.loadAllDirectors();
  }
  get directors() {
    return this._directors.asObservable();
  }
  loadAllDirectors()
  {
    this.getAllDirectors().subscribe(data=>{
      this.directorStore = data;
      this._directors.next(this.directorStore);
    });
  }
  getAllDirectors()
  {
    return this.http.get<Array<Director>>(API_URL);
  }
}
