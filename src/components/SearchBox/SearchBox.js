import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SearchBox.css';
import SearchResults from '../SearchResults';

const baseSearchURL = 'https://api.spotify.com/v1/search';
const searchTypes = 'artist,track';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      tracks: [],
    };

    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
  }

  onChangeSearch(event) {
    this.setState({ query: event.target.value }, this.getSearchResults);
  }

  async getSearchResults() {
    if (this.state.query.length > 0) {
      try {
        const response = await fetch(`${baseSearchURL}?q=${this.state.query}&type=${searchTypes}`);
        const responseJson = await response.json();
        const tracks = this.filterTrackDuplicates(responseJson.tracks.items.sort(this.popularitySort));
        const artists = responseJson.artists.items.sort(this.popularitySort);
        this.setState({ tracks: tracks.slice(0, 10) });
      } catch (error) {
        console.log(error);
      }
    } else {
      this.setState({ tracks: [] });
    }
  }

  popularitySort(a, b) {
    return b.popularity - a.popularity;
  }

  filterTrackDuplicates(tracks) {
    const filtered = [];
    const seen = {};
    for (const track of tracks) {
      const trackArtist = track.artists[0].name;
      if (!seen[`${track.name}-${trackArtist}`]) {
        filtered.push(track);
        seen[`${track.name}-${trackArtist}`] = true;
      }
    }
    return filtered;
  }

  clearSearch() {
    this.setState({ query: '', tracks: [] });
  }

  render() {
    return (
      <div className="search-box">
        <div className="search-bar">
          <div className="placeholder">
            <i className="material-icons search">search</i>
            <input
              type="text"
              placeholder="Search for a song to request"
              value={this.state.query}
              onChange={this.onChangeSearch}
            />
            <i className="material-icons cancel" onClick={this.clearSearch.bind(this)}>cancel</i>
          </div>
        </div>
        <SearchResults tracks={this.state.tracks} roomId={this.props.roomId} onSelectSong={this.clearSearch.bind(this)} />
      </div>
    );
  }
}

export default withStyles(s)(SearchBox);
