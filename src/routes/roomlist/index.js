
import React from 'react';
import RoomList from './RoomList';

export default {

  path: '/list/:room',

  async action(context) {
    return {
      title: context.params.room,
      component: <RoomList name={context.params.room} />
    };
  },

};
