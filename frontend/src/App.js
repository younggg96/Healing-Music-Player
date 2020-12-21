import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import PlaylistsPage from "./pages/PlaylistsPage";
import ArtistsPage from "./pages/ArtistsPage";
import AlbumsPage from './pages/AlbumsPage';
import SongsPage from './pages/SongsPage';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/playlists" component={PlaylistsPage} />
        <Route exact path="/artists" component={ArtistsPage} />
        <Route exact path="/albums" component={AlbumsPage} />
        <Route exact path="/songs" component={SongsPage} />
      </Switch>
    </Router>
  );
};

export default App;
