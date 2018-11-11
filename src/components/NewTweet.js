import React, { Component } from 'react'
import Avatar from './Avatar';
import { connect } from 'react-redux';
import { handleAddTweet } from '../actions/tweets';

export class NewTweet extends Component {
  state = {
    tweetText: ''
  }

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  }

  handleTweet = e => {
    e.preventDefault();
    this.props.dispatch(handleAddTweet());
  }

  render() {
    const { avatar } = this.props;

    return (
      <div className='new-tweet flex flex--column'>
        <div className='flex'>
          <Avatar avatarUrl={avatar} />
          <textarea
            rows='1'
            placeholder="What's up?"
            className='new-tweet__textbox'
            onChange={this.handleChange('tweetText')}
          />
        </div>
        <button className='new-tweet__button'>Tweet</button>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    avatar: users[authedUser].avatarURL
  }
}

export default connect(mapStateToProps)(NewTweet);