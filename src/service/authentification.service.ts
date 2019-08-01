import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import {keyframes} from '@angular/animations';

@Injectable()
export class AuthenticationService {
  private host: String = 'http://localhost:8080';
  private jwtToken = null;
   constructor(private http: HttpClient) {

   }
  login(user) {
    return this.http.post(this.host + '/login', user, {observe: 'response'});

  }
  saveToken(jwt: string) {
     // this.jwtToken=jwt;
     localStorage.setItem('token', jwt);
  }

  loadToken() {
     this.jwtToken = localStorage.getItem('token');
  }
  getCollborateur() {
     if (this.jwtToken == null) { this.loadToken(); }
     return  this.http.get(this.host + '/utilisateurs', {headers: new HttpHeaders({Authorization: this.jwtToken})});
   }

  logout() {
    this.jwtToken = null;
    // this.username=null;
    // this.mode=false;
    localStorage.removeItem('token');
    // this.router.navigateByUrl("/login");
  }
}

