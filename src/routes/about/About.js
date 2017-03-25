
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './About.css';

class About extends React.Component {

  render() {
    return (
      <div>
        <h1>ABOUT</h1>
      </div>
    );
  }
}

export default withStyles(s)(About);
