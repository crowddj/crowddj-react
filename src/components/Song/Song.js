import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Song.css';
import base from '../../base';
import { voteSong } from '../../core/utils';

class Song extends React.Component {
  constructor(props) {
    super(props);

    this.upvote = this.upvote.bind(this);

    this.state = {
      voteCount: props.song.voteCount
    };
  }

  componentWillMount() {
    this.ref = base.syncState(`rooms/johns-room/queue/${this.props.song.key}/voteCount`, {
      context: this,
      state: 'voteCount'
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    const { song } = this.props;
    return (
      <tr>
        <td className="ranking">{ song.voteCount }</td>
        <td className="name">{ song.name }</td>
        <td className="artist">{ song.artist }</td>
        <td className="vote"><i className="material-icons" onClick={ this.upvote }>thumb_up</i></td>
      </tr>
    );
  }

  upvote() {
    if (voteSong(this.props.song)) {
      let state = { ...this.state };
      state.voteCount += 1;
      this.setState(state);
    }
  }
}

export default withStyles(s)(Song);
