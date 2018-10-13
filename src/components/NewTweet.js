import React from 'react';
import Avatar from './Avatar';
import { connect } from 'react-redux';

const NewTweet = (props) => {
  const { avatar } = props;

  return (
    <div className='new-tweet flex'>
      <Avatar avatarUrl={avatar} />
      <textarea rows='2' placeholder="What's up?" className='new-tweet__textbox'>

      </textarea>
    </div>
  )
}

function mapStateToProps({ authedUser, users }) {
  return {
    avatar: users[authedUser].avatarURL
  }
}

export default connect(mapStateToProps)(NewTweet);