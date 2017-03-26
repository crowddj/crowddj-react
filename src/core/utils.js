
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
  return getAddedSongs().filter((item) => item == song.name).length > 0;
}

export function addSong(song) {
  const current = getAddedSongs();
  current.push(song.name);
  cookie.save(Cookies.AddedSongs, current);
  return current;
}

export function getVotedSongs() {
  let currentVotedSongs = cookie.load(Cookies.VotedSongs);
  if (currentVotedSongs == null || currentVotedSongs == undefined || currentVotedSongs.constructor !== Array) {
    currentVotedSongs = [];
  }
  return currentVotedSongs;
}

// returns true if not yet voted, false if already voted for
export function voteSong(song) {
  const current = getVotedSongs();

  if (current.includes(song.trackId)) {
    return false;
  } else {
    current.push(song.trackId);
    cookie.save(Cookies.VotedSongs, current);
    return true;
  }
}

export function getRatedSongs() {
  let currentRatedSongs = cookie.load(Cookies.RatedSongs);
  if (currentRatedSongs == null || currentRatedSongs == undefined || currentRatedSongs.constructor !== Array) {
    currentRatedSongs = [];
  }
  return currentRatedSongs;
}

// returns true if not yet voted, false if already voted for
export function rateSong(trackId) {
  let current = getRatedSongs();

  if (current.includes(trackId)) {
    return false;
  }
  else {
    current.push(trackId);
    cookie.save(Cookies.RatedSongs, current);
    return true;
  }
}
