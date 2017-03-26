import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SearchResults.css';
import base from '../../base';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queue: [],
    };
  }

  componentWillMount() {
    console.log(`in search results: ${this.props.roomId}`);
    this.ref = base.syncState(`rooms/${this.props.roomId}/queue`, {
      context: this,
      state: 'queue',
      asArray: true,
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  renderTracks() {
    if (this.props.tracks.length > 0) {
      return (
        <div className="search-results-tracks">
          <h4>Tracks</h4>
          <ul>
            { this.props.tracks.map((track) => (
              <li
                key={track.id} onClick={() => {
                  this.addTrackToQueue(track);
                  this.props.onSelectSong();
                }}
              >
                <span className="track-name">{ track.name }</span><br />
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

  addTrackToQueue(track) {
    const queue = this.state.queue;
    let newTrack = true;
    for (const queuedTrack of queue) {
      if (track.name == queuedTrack.name && track.artists[0].name == queuedTrack.artist) {
        queuedTrack.voteCount++;
        newTrack = false;
        break;
      }
    }

    if (newTrack) {
      queue.push({
        name: track.name,
        artist: track.artists[0].name,
        voteCount: 1,
        trackId: track.id,
      });
    }
    this.setState({ queue });
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
