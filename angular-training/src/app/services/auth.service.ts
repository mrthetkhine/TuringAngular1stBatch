import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
export const API_URL = "http://localhost:3000/auth/login";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token:string = '';
  authenticated = false;
  constructor(private http:HttpClient,
              private router: Router) {
    console.log('AuthService created');
  }

  loadToken()
  {
    let token = localStorage.getItem("token");
    if(token)
    {
      this.setAuthentication(token);
    }
  }
  isAuthenticated()
  {
    return this.authenticated;
  }
  setAuthentication(token:string)
  {
    this.token = token;
    this.authenticated = true;
  }

  login(username:string,password:string):Observable<any>
  {
    return this.http.post(API_URL,{
      username, //username:username
      password,
    });
  }
  getToken()
  {
    return this.token;
  }
  logout()
  {
    localStorage.removeItem("token");
    this.token = "";
    this.authenticated = false;
    this.router.navigate(["/login"]);
  }
}
