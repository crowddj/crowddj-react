

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SearchBox.css';

import Autosuggest from 'react-autosuggest';

const baseSearchURL = 'https://api.spotify.com/v1/search';
const searchTypes = 'artist,track';

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      results: {}
    }

    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.getSearchResults = this.getSearchResults.bind(this);
  }

  componentDidUpdate() {

  }

  onChangeSearch(event) {
    this.setState({ query: event.target.value }, this.getSearchResults);
  }

  async getSearchResults() {
    try {
      let response = await fetch(`${baseSearchURL}?q=${this.state.query}&type=${searchTypes}`);
      let responseJson = await response.json();
      console.log(responseJson);
    } catch(error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="search-box">
        <input 
          type="text" 
          placeholder="Search for a song" 
          value={ this.state.query }
          onChange={ this.onChangeSearch }/>
      </div>
    );
  }
}

export default withStyles(s)(SearchBox);