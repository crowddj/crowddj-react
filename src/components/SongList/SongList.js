
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SongList.css';
import base from '../../base';
import Song from '../Song';

class SongList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queue: [],
    };
  }

  componentWillMount() {
    console.log(`roomid${this.props.roomId}`);
    this.ref = base.syncState(`rooms/${this.props.roomId}/queue`, {
      context: this,
      state: 'queue',
      asArray: true,
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    return (
      <div className="list-container">
        <h3>Requested Songs</h3>
        <hr />
        <div className="container">
          <table>
            <tbody>
              { this.state.queue.sort((a, b) => {
                return b.voteCount - a.voteCount;
              }).map(song =>
                <Song
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

export default withStyles(s)(SongList);
