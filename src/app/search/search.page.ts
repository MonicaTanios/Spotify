import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  public tracksList: any;
  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  getTracks(artist: string){
    this.spotifyService.getTrackByArtistName(artist).subscribe(data => {
      console.log(data);
      this.tracksList = data['tracks']['items'];
    },
      err => {
        console.log(err);
      }
    )
  }

}
