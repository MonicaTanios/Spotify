import { SpotifyService } from './../services/spotify.service';
import { TestService } from './../test.service';
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

  constructor( private spotifyService: SpotifyService,
    private _route: ActivatedRoute) {
  }

  ngOnInit() {
   let temp =  this.spotifyService.getTracksStatic()
   console.log(temp);
   
    this.data = JSON.parse(JSON.stringify(this.spotifyService.getTracksStatic()));
  }

}
