
import React from 'react';
import Room from './Room';


export default {

  path: '/r/:room',

  async action(context) {
    return {
      title: 'Music Room',
      component: <Room name={context.params.room} />,
    };
  },

};
