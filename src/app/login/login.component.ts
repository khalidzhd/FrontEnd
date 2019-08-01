import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../service/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mode = 0;
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(user) {
    this.authService.login(user)
        .subscribe(resp => {
              const jwt = resp.headers.get('Authorization');
              // console.log(resp.headers.get('Authorization'));
              this.authService.saveToken(jwt);
              this.router.navigateByUrl('/dashboard');

            },
            err => {
              this.mode = 1;
            });
  }
}
