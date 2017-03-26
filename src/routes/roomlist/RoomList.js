import React from 'react';
import SearchBox from '../../components/SearchBox';
import Playlist from '../../components/Playlist';
import NowPlaying from '../../components/NowPlaying';
import Layout from '../../components/Layout';

class RoomList extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    console.log(props.name);
  }

  render() {
    return (
      <div className="container">
        <Layout />
        <br />
        <Playlist
          isDj={ true }
          roomId={this.props.name}/>
      </div>
      )
  }
}

export default RoomList;