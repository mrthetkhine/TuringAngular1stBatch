import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyFakeServiceService {

  constructor() {
    console.log("DummyFakeServiceService created");
  }

  getFakeService()
  {
    console.log("GetFakeService invoked");
  }
}
