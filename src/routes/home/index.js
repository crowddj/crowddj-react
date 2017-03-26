
import React from 'react';
import Home from './Home';

export default {

  path: '/',

  async action() {
    const data = {
      news: [],
    };
    return {
      title: 'React Starter Kit',
      component: <Home news={data.news} />,
    };
  },

};
