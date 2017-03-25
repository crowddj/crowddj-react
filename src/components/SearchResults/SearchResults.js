import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SearchResults.css';

class SearchResults extends React.Component {
  renderTracks() {
    if (this.props.tracks.length > 0) {
      return (
        <div className="search-results-tracks">
          <h4>Tracks</h4>
          <ul>
            { this.props.tracks.map((track) => (
              <li key={track.id}>{ track.name }</li>
              ))}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }

  renderArtists() {
    if (this.props.tracks.length > 0) {
      return (
        <div className="search-results-artists">
          <h4>Artists</h4>
          <ul>
            { this.props.artists.map((artist) => (
              <li key={artist.id}>{ artist.name }</li>
              ))}
          </ul>
        </div>
      );
    } return null;
  }

  render() {
    return (
      <div className="search-results">
        { this.renderTracks() }
        { this.renderArtists() }
      </div>
    );
  }
}

export default withStyles(s)(SearchResults);
