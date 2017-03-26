import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NowPlayingRating.css';

const baseURL = 'https://api.spotify.com/v1/tracks/';

class NowPlayingRating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      confirmed: false,
      confirmedRating: null,
      currentTrack: props.track,
    };

    this.renderHeart = this.renderHeart.bind(this);
    this.resetRating = this.resetRating.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.track != this.state.currentTrack) {
      this.setState({ rating: 0, confirmed: false, confirmRating: null, currentTrack: nextProps.track });
    }
  }

  setRating(rating) {
    this.setState({ rating });
  }

  resetRating() {
    this.setState({ rating: 0 });
  }

  confirmRating(rating) {
    if (!this.state.confirmed) {
      this.setState({ confirmed: true, confirmRating: rating }, () => {
        this.props.sendRating(this.state.confirmRating);
      });
    }
  }


  renderHeart(index) {
    const rating = this.state.confirmed ? this.state.confirmRating : this.state.rating;
    if (index < rating) {
      return (
        <i
          key={index}
          className="material-icons heart"
          onMouseOver={() => this.setRating(index + 1)}
          onClick={() => this.confirmRating(index + 1)}
        >
          favorite_solid
        </i>
      );
    } else {
      return (
        <i
          key={index}
          className="material-icons heart"
          onMouseOver={() => this.setRating(index + 1)}
        >
          favorite_border
        </i>
      );
    }
  }

  render() {
    return (
      <span className="rating" onMouseLeave={this.resetRating}>
        { [0, 1, 2, 3, 4].map((index) =>
          this.renderHeart(index),
        )}
      </span>
    );
  }
}

export default withStyles(s)(NowPlayingRating);
