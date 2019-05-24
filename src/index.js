import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
// import PropTypes from 'prop-types';

import Header from './Header';
import Post from './Post';

import './style.scss';

class App extends Component {
  state = {
    contentPost: [
      {
        post: 1,
        user: 'Rubia Savolksi',
        userAvatar: 'user1.jpg',
        time: 'há 3 min',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        post: 2,
        user: 'Diego Schell Fernandes',
        userAvatar: 'user2.jpg',
        time: 'há 10 min',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        post: 3,
        user: 'Mr. Mustache',
        userAvatar: 'user3.jpg',
        time: 'há 20 min',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
    ],
  };

  render() {
    const { contentPost } = this.state;

    return (
      <Fragment>
        <Header />
        {contentPost
          && contentPost.map(contentPost => <Post key={contentPost.id} data={contentPost} />)}
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
