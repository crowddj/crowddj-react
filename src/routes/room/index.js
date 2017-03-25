
import React from 'react';
import Room from './Room';
import Layout from '../../components/Layout';

export default {

  path: '/r/:room',

  async action(context) {
    return {
      title: 'Music Room',
      component: <Layout><Room name={context.params.room} /></Layout>,
    };
  },

};
