import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <div className="postheader">
    <img src={props.userAvatar} className="userAvatar" alt="User avatar" />
    <p className="userName">{props.user}</p>
    <p className="time">{props.time}</p>
    <br />
    <hr />
  </div>
);

PostHeader.propTypes = {
  userAvatar: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};

export default PostHeader;
