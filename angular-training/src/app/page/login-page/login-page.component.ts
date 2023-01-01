import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor(private authService : AuthService,
              private router: Router,
    ) {
  }
  ngOnInit()
  {
    console.log('Login ngOnChanges');
    if(this.authService.isAuthenticated())
    {
      this.router.navigate(['/admin-page']);
    }
  }
  login()
  {
    this.authService.login();
    this.router.navigate(['/admin-page']);
  }
}
