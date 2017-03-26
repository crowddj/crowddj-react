
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NowPlaying.css';
import base from '../../base';
import { rateSong } from '../../core/utils';

import NowPlayingRating from '../NowPlayingRating';

const baseURL = 'https://api.spotify.com/v1/tracks/';

class NowPlaying extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      current: {}
    }

    this.vote = this.vote.bind(this);
  }

  componentWillMount() {
    console.log('in now playing: ' + this.props.roomId);
    this.ref = base.syncState(`rooms/${this.props.roomId}/current`, {
      context: this,
      state: 'current',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  componentDidUpdate() {
    this.getAlbumArtwork();
  }

  async getAlbumArtwork() {
    const response = await fetch(`${baseURL}${this.state.current.trackId}`);
    const responseJson = await response.json();
    const artwork = responseJson.album.images[0].url;
    this.setState({ imageURL: artwork });
  }

  vote(rating) {
    let state = { ...this.state };
    if (rateSong(this.state.current.trackId)) {
      let current = { ...this.state.current };
      if (current.rating) {
        console.log(current.rating);
        let weightedRating = current.rating * current.ratingCount;
        weightedRating += rating;
        current.ratingCount += 1;
        current.rating = weightedRating / current.ratingCount;
      }
      else {
        current.rating = rating;
        current.ratingCount = 1;
      }
      state.current = current;
      this.setState(state);
    }
  }

  render() {
    return (
      <div className="now-playing">
        <img className="artwork" src={this.state.imageURL} />
        { !this.props.isDj &&
          <NowPlayingRating
            track={ this.state.current.name }
            sendRating={ this.vote.bind(this) }/>
        }
        <div className="info">
          <div className="currently">Currently Playing</div>
          <div className="song">
            <span className="name">{ this.state.current.name },</span>
            <span className="artist">{ this.state.current.artist }</span>
          </div>
        </div>
        { this.props.isDj &&
          <div className="vote">
            <i className="material-icons">favorite_solid</i>
            { Object.keys(this.state.current).length > 0  &&
              <span className="upvotes">{ this.state.current.rating.toString().substring(0, 3) }</span>
            }
          </div>
        }
      </div>
    );
  }
}

export default withStyles(s)(NowPlaying);
