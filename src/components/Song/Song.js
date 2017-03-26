import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Song.css';
import base from '../../base';
import { voteSong } from '../../core/utils';

class Song extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      voteCount: props.song.voteCount,
    };

    this.upvote = this.upvote.bind(this);
  }

  componentWillMount() {
    console.log("in song: " + this.props.roomId);
    this.ref = base.syncState(`rooms/${this.props.roomId}/queue/${this.props.song.key}/voteCount`, {
      context: this,
      state: 'voteCount',
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    const { song } = this.props;
    const { roomId } = this.props;
    return (
      <tr>
        <td className="ranking"></td>
        <td className="name-artist">
          <span className="name">{ song.name }</span>
          <span className="artist">{ song.artist }</span>
        </td>
        <td className="vote" onClick={ this.upvote }>
          <i className="material-icons">thumb_up</i>
          <span className="upvotes">{ this.state.voteCount }</span>
        </td>
      </tr>
    );
  }

  upvote() {
    if (voteSong(this.props.song)) {
      const state = { ...this.state };
      state.voteCount += 1;
      this.setState(state);
    }
  }
}

export default withStyles(s)(Song);
