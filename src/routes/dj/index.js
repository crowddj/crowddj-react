
import React from 'react';
import Dj from './Dj';

export default {

  path: '/dj/:room',

  async action(context) {
    return {
      title: context.params.room,
      component: <Dj name={context.params.room} />
    };
  },

};
