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
      artists: [],
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
        this.setState({ tracks: responseJson.tracks.items, artists: responseJson.artists.items });
      } catch (error) {
        console.log(error);
      }
    } else {
      this.setState({ tracks: [], albums: [] });
    }
  }

  render() {
    return (
      <div className="search-box">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for a song"
            value={this.state.query}
            onChange={this.onChangeSearch}
          />
        </div>
        <SearchResults tracks={this.state.tracks} artists={this.state.artists} />
      </div>
    );
  }
}

export default withStyles(s)(SearchBox);
