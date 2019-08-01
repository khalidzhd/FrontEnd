import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../service/authentification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-collaborateur',
  templateUrl: './collaborateur.component.html',
  styleUrls: ['./collaborateur.component.scss']
})
export class CollaborateurComponent implements OnInit {
  collaborateurs;
  constructor(private authService: AuthenticationService, private router: Router ) { }

  ngOnInit() {
    this.authService.getCollborateur()
        .subscribe(data => {
          this.collaborateurs= data;
        }, err => {
          this.authService.logout();
          this.router.navigateByUrl('/login')!;
        })
  }

}
