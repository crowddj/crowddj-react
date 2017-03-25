
import React from 'react';
import database from '../../database';

class Room extends React.Component {
  static propTypes = {
    name: React.PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { songs: [] };
    this.firebaseRef = database.ref(`queues/${props.name}`);
  }

  componentWillMount() {
    this.firebaseRef.once('value', (dataSnapshot) => {
      const songs = [];
      dataSnapshot.forEach((childSnapshot) => {
        const song = childSnapshot.val();
        song['.key'] = childSnapshot.key;
        songs.push(song);
      });

      this.setState({
        songs,
      });
    });
  }

  render() {
    // console.log(this.state.songs);
    const { name } = this.props;
    return (
      <div className="container">
        <h1>{name}</h1>
        <p className="text-center">
          {JSON.stringify(this.state.songs)}
        </p>
      </div>
    );
  }
}

export default Room;
