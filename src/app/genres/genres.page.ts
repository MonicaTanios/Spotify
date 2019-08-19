import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.page.html',
  styleUrls: ['./genres.page.scss'],
})
export class GenresPage implements OnInit {

  private trackGenre: string;
  public allGenres: any;

  constructor(private router: Router,
    private spotifyService: SpotifyService) {
    this.trackGenre = "";
    this.spotifyService.getAllGenres().subscribe(data => {
      console.log(data);
      this.allGenres = data['genres'];
    },
      err => {
        console.log(err);
      }
    )
  }

  ngOnInit() {
    this.trackGenre = "";
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
