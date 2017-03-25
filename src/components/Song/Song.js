import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Song.css';

class Song extends React.Component {
  render() {
    const { song } = this.props;
    return (
      <tr>
        <td className="ranking">{ song.upvoteCount }</td>
        <td className="name">{ song.name }</td>
        <td className="artist">{ song.artist }</td>
        <td className="vote"><i className="material-icons">thumb_up</i></td>
      </tr>
    );
  }
}

export default withStyles(s)(Song);
