import React from 'react';
import PropTypes from 'prop-types';

import PostHeader from './PostHeader';

const Post = props => (
  <div className="post">
    <PostHeader userAvatar={props.data.userAvatar} user={props.data.user} time={props.data.time} />
    <p>{props.data.text}</p>
  </div>
);

Post.propTypes = {
  data: PropTypes.shape({
    post: PropTypes.number.isRequired,
    user: PropTypes.string.isRequired,
    userAvatar: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Post;
