var SpotifyWebApi = require('spotify-web-api-node');

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: 'fc33e5ef36eb4dff9751469c4488323d',
  clientSecret: '916da4fa5a8a4669b87409b9dc960a96',
  redirectUri: 'http://localhost:8080'
});