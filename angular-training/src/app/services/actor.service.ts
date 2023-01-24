import { Injectable } from '@angular/core';
import {HOST_URL} from '../../config/Api';
import {BehaviorSubject} from "rxjs";
import {Actor, MovieDto} from "../model/movie-dto.model";
import {HttpClient} from "@angular/common/http";

const API_URL = HOST_URL+"/actors";
@Injectable({
  providedIn: 'root'
})
export class ActorService {

  private _actors: BehaviorSubject<Actor[]>;
  actorStore :Array<Actor>  = [];

  constructor(public http: HttpClient) {
    this._actors = <BehaviorSubject<Actor[]>>new BehaviorSubject<Actor[]>([]);
    this.loadAllActor();
  }
  get actors() {
    return this._actors.asObservable();
  }
  loadAllActor()
  {
    this.getAllActor().subscribe(data=>{
      this.actorStore = data;
      this._actors.next(this.actorStore);
    });
  }
  getAllActor()
  {
    return this.http.get<Array<Actor>>(API_URL);
  }
}
