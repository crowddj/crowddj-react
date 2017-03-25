
import ActionTypes from '../constants/ActionTypes';
import { getAddedSongs } from './utils';

export function addSongToQueue(song) {
  return {
    type: ActionTypes.AddSong,
  };
}
