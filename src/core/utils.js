
import Cookies from '../constants/Cookies';
import cookie from 'react-cookie';

export function getAddedSongs() {
  let currentAddedSongs = cookie.load(Cookies.AddedSongs);
  if (currentAddedSongs == null || currentAddedSongs == undefined || currentAddedSongs.constructor !== Array) {
    currentAddedSongs = [];
  }
  return currentAddedSongs;
}

export function hasAddedSong(song) {
  return getAddedSongs().filter((item) => {
    return item == song.name
  }).length > 0
}

export function addSong(song) {
  const current = getAddedSongs();
  current.push(song.name);
  cookie.save(Cookies.AddedSongs, current);
  return current;
}
