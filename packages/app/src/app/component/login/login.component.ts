import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { LOGIN } from 'src/app/queries/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form = {
    email: null,
    password: null
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private apollo: Apollo
  ) { }

  ngOnInit(): void {
    this.authService.initialize().subscribe(resp => {
      if (resp) {
        this.router.navigate(['/']);
      }
    });
  }

  login(): void {
    this.apollo.mutate({
      mutation: LOGIN,
      variables: {
        email: this.form.email,
        password: this.form.password
      }
    }).subscribe((resp: any) => {
      this.authService.login(resp.data.login);
    });
  }
}
