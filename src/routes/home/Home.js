
import React from 'react';
import $ from 'jquery';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Button } from 'reactstrap';
import Link from '../../components/Link';
import NowPlaying from '../../components/NowPlaying';
import SearchBox from '../../components/SearchBox';
import SongList from '../../components/SongList';
import { getAddedSongs, hasAddedSong, addSong } from '../../core/utils';
import Layout from '../../components/Layout';
import s from './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    // this.checkEnter = this.checkEnter.bind(this);
  }

  checkEnter(e) {
    console.log(e);
    if (e.keyCode === 13) {
      console.log('enter');
      parseJoinInput(e);
    }
  }

  join() {
    $('.copy .desc, .caption .cap1, .create-button, .overlay-join').fadeOut();
    $('.join-button .input-container, .caption .cap2').fadeIn();
  }

  create() {
    $('.copy .desc, .caption .cap1, .join-button, .overlay-create').fadeOut();
    $('.create-button .input-container, .caption .cap2').fadeIn();
  }

  parseJoinInput() {
    const name = $('#join-room-name').val();
    const result = '/r/' + name;
    $(".join").attr("href", result);
    $(".join").click();
  }

  parseCreateInput() {
    const name = $('#create-room-name').val();
    const result = '/dj/' + name;
    $(".create").attr("href", result);
    $(".create").click();
  }

  render() {
    console.log(`Current songs: ${getAddedSongs()}`);
    console.log('Adding song');
    addSong({ name: 'test' });
    console.log(`Current songs: ${getAddedSongs()}`);
    console.log(`Has song named test: ${hasAddedSong({ name: 'test' })}`);
    console.log(`Has song named nottest: ${hasAddedSong({ name: 'nottest' })}`);


    return (
      <div className="container">
        <Layout />
        <div className="copy">
          <div className="title">Want to stay in the spotify queue tonight?</div>
          <p className="desc">This app let’s you recommend songs for your DJ  friend to play throughout the night, updating in  real time, so they can finally take your suggestions seriously!</p>
          <p className="desc">Or they’ll keep ignoring you as usual.</p>
        </div>

        <div className="button-container join-button">
          <span className="caption">
            <span className="cap1">Join your DJ's party now!</span>
            <span className="cap2">Enter your party's key!</span>
          </span>
          <div className="input-container">
            <input id="join-room-name" type="text" onkeydown={this.checkEnter.bind(this)} />
          </div>
          <div className="overlay-join" onClick={this.join.bind(this)}></div>
          <a className="join" href="#" onClick={this.parseJoinInput.bind(this)}>Join <span className="extra">A Party</span></a>
        </div>

        <div className="button-container create-button">
          <span className="caption">
            <span className="cap1">Be the DJ friend!</span>
            <span className="cap2">Create your party's key!</span>
          </span>
          <div className="input-container">
            <input id="create-room-name" type="text" />
          </div>
          <div className="overlay-create" onClick={this.create.bind(this)}></div>
          <a className="create" href="#" onClick={this.parseCreateInput.bind(this)}>Create <span className="extra">A Party</span></a>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
