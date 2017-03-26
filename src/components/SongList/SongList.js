
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SongList.css';
import base from '../../base';
import Song from '../Song';

class SongList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      queue: []
    }
  }

  componentWillMount() {
    console.log('roomid' + this.props.roomId)
    this.ref = base.syncState(`rooms/${this.props.roomId}/queue`, {
      context: this,
      state: 'queue',
      asArray: true
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    console.log(this.state.queue);
    return (
      <div className="list-container">
        <h3>Next up:</h3>
        <table>
          { this.state.queue.map( song =>
            <Song
              key={ song.key }
              song={ song }
	      roomId={this.props.roomId}/> )
          }
        </table>
      </div>
    );
  }
}

export default withStyles(s)(SongList);
