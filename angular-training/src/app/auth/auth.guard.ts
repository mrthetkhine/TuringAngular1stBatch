import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router){};
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {

    let isLoggedIn = this.authService.isAuthenticated();
    console.log('CanActivate called ',isLoggedIn);
    if (isLoggedIn){
      //this.router.navigate([next.routeConfig?.path]);
      return true
    } else {
      console.log('AuthGuard state.url ', state.url);
      this.router.navigate(['/login-page'],{
        queryParams: {
          redirectUrl: state.url
        }
      });
      return false;
    }
  }

}
