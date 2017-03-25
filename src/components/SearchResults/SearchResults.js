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
              <li key={track.id} onClick={ () => this.addTrackToQueue(track.id) }>
                <span className="track-name">{ track.name }</span><br/>
                <span className="track-artist-name">{ track.artists[0].name }</span>
              </li>
              ))}
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }

  addTrackToQueue(trackID) {
    
  }

  render() {
    return (
      <div className="search-results">
        { this.renderTracks() }
      </div>
    );
  }
}

export default withStyles(s)(SearchResults);
