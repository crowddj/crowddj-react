
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NowPlaying.css';

class NowPlaying extends React.Component {
  render() {
    return (
      <div className="now-playing">
        <h3>Now Playing:</h3>
        <img className="artwork" src="https://s-media-cache-ak0.pinimg.com/originals/4d/9a/cc/4d9accabd07ebff45cd1ea4128e34236.jpg" alt="" />
        <div className="info">
          <div className="name">No Way</div>
          <div className="artist">The Naked and Famous</div>
          <div className="rating">
            <i className="material-icons">favorite_border</i>
            <i className="material-icons">favorite_border</i>
            <i className="material-icons">favorite_border</i>
            <i className="material-icons">favorite_border</i>
            <i className="material-icons">favorite_border</i>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(NowPlaying);
