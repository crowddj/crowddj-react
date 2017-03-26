
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Playlist.css';
import base from '../../base';
import PlayedSong from '../PlayedSong';

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      played: [],
    };
  }

  componentWillMount() {
    console.log(`roomid${this.props.roomId}`);
    this.ref = base.syncState(`rooms/${this.props.roomId}/played`, {
      context: this,
      state: 'played',
      asArray: true,
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <div className="list-container">
        <h3>Party Playlist</h3>
        <hr />
        <div className="container">
          <table>
            <tbody>
              { this.state.played.sort((a, b) => {
                return b.voteCount - a.voteCount;
              }).map(song =>
                <PlayedSong
                  key={song.key}
                  song={song}
                  roomId={this.props.roomId}
                  isDj={this.props.isDj}
                />)
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Playlist);
