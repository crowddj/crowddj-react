import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Song.css';
import base from '../../base';
import { voteSong } from '../../core/utils';

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: {}
    };

    this.upvote = this.upvote.bind(this);
    this.remove = this.remove.bind(this);
  }

  componentWillMount() {
    this.ref = base.syncState(`rooms/${this.props.roomId}/queue/${this.props.song.key}`, {
      context: this,
      state: 'song'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
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
        { isDj &&
          <td className="vote" onClick={ this.remove }>
            <span className="upvotes">{ this.state.song.voteCount }</span>
            <i className="material-icons">cancel</i>
          </td>
        }
        { !isDj &&
          <td className="vote" onClick={ this.upvote }>
            <i className="material-icons">thumb_up</i>
            <span className="upvotes">{ this.state.song.voteCount }</span>
          </td>
        }
      </tr>
    );
  }

  upvote() {
    if (voteSong(this.props.song)) {
      const state = { ...this.state };
      state.song.voteCount += 1;
      this.setState(state);
    }
  }

  remove() {
    const state = { ...this.state };
    state.song = null;
    this.setState(state);
  }
}

export default withStyles(s)(Song);
