import React from 'react';
import SearchBox from '../../components/SearchBox';
import SongList from '../../components/SongList';
import NowPlaying from '../../components/NowPlaying';
import Layout from '../../components/Layout';

class Dj extends React.Component {
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
        <SongList
          isDj={ true }
          roomId={this.props.name}/>
        <NowPlaying
          roomId={this.props.name}
          isDj={ true }/>
      </div>
      )
  }
}

export default Dj;
