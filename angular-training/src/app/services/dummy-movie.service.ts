import { Injectable } from '@angular/core';
import {DummyFakeServiceService} from "./dummy-fake-service.service";

@Injectable({
  providedIn: 'root'
})
export class DummyMovieService {

  constructor(dummyFakeService:DummyFakeServiceService) {
    console.log('DummyService created');
  }
  public getMovieList()
  {
    return ["Matrix","Titanic","Avatar"];
  }
}
