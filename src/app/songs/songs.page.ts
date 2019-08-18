import { HomePage } from './../home/home.page';
import { SpotifyService } from './../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss']
})
export class SongsPage implements OnInit {

  public tracksList: any;
  data: any = {};
  neededGenre: string;

  constructor( private router: Router,
    private spotifyService: SpotifyService,
    private _route: ActivatedRoute) {
      this.neededGenre = this._route.snapshot.params.genre;

      this._route.queryParams.subscribe(params => {
        this.neededGenre = params["genre"];
    });
  }

  ngOnInit() {
    //get tracks according to the genre from home page
    this.spotifyService.getTracks(this.neededGenre).subscribe(data => {
      console.log(data);
      this.tracksList = data['tracks']['items'] 
    },
      err => {
        console.log(err);
      }
    );
  }

  @HostListener('window:popstate', ['$event'])
  onPopState(event) {
    this.router.navigate(['home']);
  }

}
