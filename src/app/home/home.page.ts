import { SpotifyService } from './../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToTabs(){
    this.router.navigate(['tabs']);
  }

}
