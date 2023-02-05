import { Component } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm:any;
  redirectUrl:string ='';
  constructor(private authService : AuthService,
              private router: Router,
              private fb:FormBuilder,
              private route:ActivatedRoute,
    ) {
    this.loginForm = fb.group({
      "username": ["", Validators.required],
      "password":["", Validators.required]
    });
  }
  ngOnInit()
  {
    console.log('Login ngOnChanges');
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.redirectUrl = params['redirectUrl'];
      });
    if(this.authService.isAuthenticated())
    {
      this.router.navigate(['/admin-page']);
    }
  }
  login()
  {
    //this.authService.login();
    this.router.navigate(['/admin-page']);
  }
  private loginError(error:any) {
    console.log("Error ", error);
    Swal.fire(
      'Invalid login!',
      'Invalid username or password',
      'warning'
    )
    this.loginForm.reset();
  }

  private loginOk(response:any) {
    console.log("Redirect to  ", this.redirectUrl);
    console.log("token ", response.access_token);
    localStorage.setItem("token", response.access_token);
    this.authService.setAuthentication(response.access_token);
    if(this.redirectUrl)
    {
      this.router.navigate([this.redirectUrl]);
    }
    else
    {
      this.router.navigate(['admin-page']);
    }

  }

  onSubmit() {
    console.log("reactive form submitted");
    console.log(this.loginForm.value);
    let user = this.loginForm.value;
    this.authService.login(user.username,user.password).subscribe(response=>{
      this.loginOk(response);
    },error => {
      this.loginError(error);
    });

  }
}
