
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Button } from 'reactstrap';
import Link from '../../components/Link';
import NowPlaying from '../../components/NowPlaying';
import SearchBox from '../../components/SearchBox';
import SongList from '../../components/SongList';
import { getAddedSongs, hasAddedSong, addSong } from '../../core/utils';


import s from './Home.css';

class Home extends React.Component {

  render() {
    console.log(`Current songs: ${getAddedSongs()}`);
    console.log('Adding song');
    addSong({ name: 'test' });
    console.log(`Current songs: ${getAddedSongs()}`);
    console.log(`Has song named test: ${hasAddedSong({ name: 'test' })}`);
    console.log(`Has song named nottest: ${hasAddedSong({ name: 'nottest' })}`);

    return (
      <div className="container">
        <br />
        <p className="text-center">
          <Button color="info" outline size="lg" tag={Link} to="/offer/create">Create a room</Button>
        </p>
        <NowPlaying />
        <SearchBox />
        <SongList />
      </div>
    );
  }
}

export default withStyles(s)(Home);
