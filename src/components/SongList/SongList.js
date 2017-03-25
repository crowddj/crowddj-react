
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SongList.css';

class SongList extends React.Component {
  render() {
    return (
      <div className="list-container">
        <h3>Next up:</h3>
        <table>
          <tr>
            <td className="ranking">1</td>
            <td className="name">Song Name</td>
            <td className="artist">Artist</td>
            <td className="vote"><i className="material-icons">thumb_up</i></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default withStyles(s)(SongList);
