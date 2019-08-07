import { SpotifyService } from './../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss']
})
export class SongsPage implements OnInit {

  tracksList: any;
  data: any = {};
  neededGenre: string;

  constructor( private spotifyService: SpotifyService,
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
      this.data = data['tracks']['items']
    },
      err => {
        console.log(err);
      }
    );
  }

}
