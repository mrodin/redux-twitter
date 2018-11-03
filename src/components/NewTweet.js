import React from 'react';
import Avatar from './Avatar';
import { connect } from 'react-redux';

const NewTweet = (props) => {
  const { avatar } = props;

  return (
    <div className='new-tweet flex flex--column'>
      <div className='flex'>
        <Avatar avatarUrl={avatar} />
        <textarea rows='1' placeholder="What's up?" className='new-tweet__textbox' />
      </div>
      <button className='new-tweet__button'>Tweet</button>
    </div>
  )
}

function mapStateToProps({ authedUser, users }) {
  return {
    avatar: users[authedUser].avatarURL
  }
}

export default connect(mapStateToProps)(NewTweet);