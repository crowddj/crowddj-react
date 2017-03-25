
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NowPlaying.css';
import base from '../../base';

class NowPlaying extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      current: {}
    }
  }

  componentWillMount() {
    this.ref = base.syncState(`rooms/johns-room/current`, {
      context: this,
      state: 'current'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <div className="now-playing">
        <h3>Now Playing:</h3>
        <img className="artwork" src="https://s-media-cache-ak0.pinimg.com/originals/4d/9a/cc/4d9accabd07ebff45cd1ea4128e34236.jpg" alt="" />
        <div className="info">
          <div className="name">{ this.state.current.name }</div>
          <div className="artist">{ this.state.current.artist }</div>
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
