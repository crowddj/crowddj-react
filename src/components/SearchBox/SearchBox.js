
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SearchBox.css';

class SearchBox extends React.Component {
  render() {
    return (
      <div className="search-box">
        <input type="text" name="" placeholder="Search for a song" />
      </div>
    );
  }
}

export default withStyles(s)(SearchBox);
