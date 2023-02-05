import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.scss']
})
export class LogoutPageComponent {
  constructor(private authService:AuthService,
              private router:Router) {
  }
  logout()
  {
    this.authService.logout();
    this.router.navigate(['/login-page']);
  }
}
