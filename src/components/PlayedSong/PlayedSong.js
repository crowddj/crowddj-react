import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './PlayedSong.css';
import base from '../../base';
import { voteSong } from '../../core/utils';

class PlayedSong extends React.Component {
  constructor(props) {
    super(props);
    if (!this.props.song.rating) {
      this.props.song.rating = 0;
    }
  }

  componentWillMount() {
    this.ref = base.syncState(`rooms/${this.props.roomId}/queue/${this.props.song.key}/voteCount`, {
      context: this,
      state: 'voteCount',
    });
    this.fullRef = base.syncState(`rooms/${this.props.roomId}/queue/${this.props.song.key}`, {
      context: this,
      state: 'song'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
    base.removeBinding(this.fullRef);
  }

  render() {
    const { song, roomId, isDj } = this.props;
    return (
      <tr>
        <td className="ranking"></td>
        <td className="name-artist">
          <span className="name">{ song.name }</span>
          <span className="artist">{ song.artist }</span>
        </td>
        <td className="vote">
          <i className="material-icons">favorite_solid</i>
          <span className="upvotes">{ song.rating.toString().substring(0, 3) }</span>
        </td>
      </tr>
    );
  }
}

export default withStyles(s)(PlayedSong);