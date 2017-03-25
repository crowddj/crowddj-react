
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Button } from 'reactstrap';
import s from './Home.css';
import Link from '../../components/Link';

class Home extends React.Component {

  render() {
    return (
      <div className="container">
        <br />
        <p className="text-center">
          <Button color="info" outline size="lg" tag={Link} to="/offer/create">Create an offer</Button>
          <Button color="info" outline size="lg" tag={Link} to="/offer/revise">Revise an offer</Button>
        </p>
      </div>
    );
  }
}

export default withStyles(s)(Home);
