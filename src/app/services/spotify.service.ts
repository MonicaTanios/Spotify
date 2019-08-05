import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() { }
  getTracksStatic() {
    var data = {
        "tracks": {
            "href": "https://api.spotify.com/v1/search?query=pop&type=track&market=US&offset=3&limit=3",
            "items": [
                {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                                },
                                "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                                "id": "0LyfQWJT6nXafLPZqxe9Of",
                                "name": "Various Artists",
                                "type": "artist",
                                "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/1XK01KOa8U0uuPbVnlbpRX"
                        },
                        "href": "https://api.spotify.com/v1/albums/1XK01KOa8U0uuPbVnlbpRX",
                        "id": "1XK01KOa8U0uuPbVnlbpRX",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/d44ec2ebcd0756b9d27ea7fc27668aab323595da",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/b1411fa583914a53ec009e677935f7c92efb5ae1",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/0d186fd180ce2d6cd417fc4d05117b4150a44259",
                                "width": 64
                            }
                        ],
                        "name": "Top Spot Pop",
                        "release_date": "2019-08-02",
                        "release_date_precision": "day",
                        "total_tracks": 40,
                        "type": "album",
                        "uri": "spotify:album:1XK01KOa8U0uuPbVnlbpRX"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/7n2wHs1TKAczGzO7Dd2rGr"
                            },
                            "href": "https://api.spotify.com/v1/artists/7n2wHs1TKAczGzO7Dd2rGr",
                            "id": "7n2wHs1TKAczGzO7Dd2rGr",
                            "name": "Shawn Mendes",
                            "type": "artist",
                            "uri": "spotify:artist:7n2wHs1TKAczGzO7Dd2rGr"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 206880,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "USUM71500658"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/50A83vI7B5TAI7BJJhmLsY"
                    },
                    "href": "https://api.spotify.com/v1/tracks/50A83vI7B5TAI7BJJhmLsY",
                    "id": "50A83vI7B5TAI7BJJhmLsY",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Stitches",
                    "popularity": 12,
                    "preview_url": null,
                    "track_number": 3,
                    "type": "track",
                    "uri": "spotify:track:50A83vI7B5TAI7BJJhmLsY"
                },
                {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                                },
                                "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                                "id": "0LyfQWJT6nXafLPZqxe9Of",
                                "name": "Various Artists",
                                "type": "artist",
                                "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/1XK01KOa8U0uuPbVnlbpRX"
                        },
                        "href": "https://api.spotify.com/v1/albums/1XK01KOa8U0uuPbVnlbpRX",
                        "id": "1XK01KOa8U0uuPbVnlbpRX",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/d44ec2ebcd0756b9d27ea7fc27668aab323595da",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/b1411fa583914a53ec009e677935f7c92efb5ae1",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/0d186fd180ce2d6cd417fc4d05117b4150a44259",
                                "width": 64
                            }
                        ],
                        "name": "Top Spot Pop",
                        "release_date": "2019-08-02",
                        "release_date_precision": "day",
                        "total_tracks": 40,
                        "type": "album",
                        "uri": "spotify:album:1XK01KOa8U0uuPbVnlbpRX"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/7n2wHs1TKAczGzO7Dd2rGr"
                            },
                            "href": "https://api.spotify.com/v1/artists/7n2wHs1TKAczGzO7Dd2rGr",
                            "id": "7n2wHs1TKAczGzO7Dd2rGr",
                            "name": "Shawn Mendes",
                            "type": "artist",
                            "uri": "spotify:artist:7n2wHs1TKAczGzO7Dd2rGr"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 199440,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "USUM71702833"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/2pNSP66zg4n6TLMh6nmVwu"
                    },
                    "href": "https://api.spotify.com/v1/tracks/2pNSP66zg4n6TLMh6nmVwu",
                    "id": "2pNSP66zg4n6TLMh6nmVwu",
                    "is_local": false,
                    "is_playable": true,
                    "name": "There's Nothing Holdin' Me Back",
                    "popularity": 5,
                    "preview_url": null,
                    "track_number": 29,
                    "type": "track",
                    "uri": "spotify:track:2pNSP66zg4n6TLMh6nmVwu"
                },
                {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                                },
                                "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                                "id": "0LyfQWJT6nXafLPZqxe9Of",
                                "name": "Various Artists",
                                "type": "artist",
                                "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/1XK01KOa8U0uuPbVnlbpRX"
                        },
                        "href": "https://api.spotify.com/v1/albums/1XK01KOa8U0uuPbVnlbpRX",
                        "id": "1XK01KOa8U0uuPbVnlbpRX",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/d44ec2ebcd0756b9d27ea7fc27668aab323595da",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/b1411fa583914a53ec009e677935f7c92efb5ae1",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/0d186fd180ce2d6cd417fc4d05117b4150a44259",
                                "width": 64
                            }
                        ],
                        "name": "Top Spot Pop",
                        "release_date": "2019-08-02",
                        "release_date_precision": "day",
                        "total_tracks": 40,
                        "type": "album",
                        "uri": "spotify:album:1XK01KOa8U0uuPbVnlbpRX"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/7n2wHs1TKAczGzO7Dd2rGr"
                            },
                            "href": "https://api.spotify.com/v1/artists/7n2wHs1TKAczGzO7Dd2rGr",
                            "id": "7n2wHs1TKAczGzO7Dd2rGr",
                            "name": "Shawn Mendes",
                            "type": "artist",
                            "uri": "spotify:artist:7n2wHs1TKAczGzO7Dd2rGr"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 187973,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "USUM71604711"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/5WV9AaAvyrf5BSMz2ivnwM"
                    },
                    "href": "https://api.spotify.com/v1/tracks/5WV9AaAvyrf5BSMz2ivnwM",
                    "id": "5WV9AaAvyrf5BSMz2ivnwM",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Treat You Better",
                    "popularity": 9,
                    "preview_url": null,
                    "track_number": 16,
                    "type": "track",
                    "uri": "spotify:track:5WV9AaAvyrf5BSMz2ivnwM"
                }
            ],
            "limit": 3,
            "next": "https://api.spotify.com/v1/search?query=pop&type=track&market=US&offset=6&limit=3",
            "offset": 3,
            "previous": "https://api.spotify.com/v1/search?query=pop&type=track&market=US&offset=0&limit=3",
            "total": 2000
        }
    };
    return data['tracks']['items']
}
}
