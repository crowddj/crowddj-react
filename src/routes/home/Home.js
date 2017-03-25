
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Button } from 'reactstrap';
import Link from '../../components/Link';
import s from './Home.css';

class Home extends React.Component {

  render() {
    return (
      <div className="container">
        <br />
        <p className="text-center">
          <Button color="info" outline size="lg" tag={Link} to="/offer/create">Create a room</Button>
        </p>
      </div>
    );
  }
}

export default withStyles(s)(Home);
