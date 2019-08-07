import { SpotifyService } from './../services/spotify.service';
import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private trackGenre: string;
  public allGenres: any = [];

  constructor(private router: Router,
    private spotifyService: SpotifyService) {
      this.spotifyService.getAllGenres().subscribe(data => {
        console.log(data);
        this.allGenres = data['genres'];
      },
        err => {
          console.log(err);
        }
      )
  }

  navigate(trackGenre: string) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "genre": trackGenre
      }
  };
    this.router.navigate(['songs'], navigationExtras);
  }

}
