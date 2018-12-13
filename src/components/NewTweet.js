import React, { Component } from 'react'
import Avatar from './Avatar';
import { connect } from 'react-redux';
import { handleAddTweet } from '../actions/tweets';

export class NewTweet extends Component {
  state = {
    text: '',
    charCount: 0
  }

  handleInputChange = (e) => {
    const { value } = e.target;
    const charCount = value.length;
    const charLimit = 280;

    if (charCount <= charLimit) {
      this.setState(() => ({
        text: value,
        charCount: charCount
      }))
    }
  }

  handleTweet = e => {
    e.preventDefault();

    const { text } = this.state;
    const { dispatch, id } = this.props;

    dispatch(handleAddTweet(text, id));

    this.setState(() => ({
      text: ''
    }));
  }

  render() {
    const { text, charCount } = this.state;
    const { avatar } = this.props;

    return (
      <form className='new-tweet flex flex--column' onSubmit={this.handleTweet}>
        <div className='flex'>
          <Avatar avatarUrl={avatar} />
          <div className='flex flex--column new-tweet__container'>
            <input
              value={text}
              name='text'
              placeholder="What's up?"
              className='new-tweet__textbox'
              onChange={this.handleInputChange}
              type='text'
            />
            <div className='new-tweet__counter'>{charCount}/280</div>
          </div>
        </div>
        <button type='submit' className='new-tweet__button mt--xs'>Tweet</button>
      </form>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    avatar: users[authedUser].avatarURL
  }
}

export default connect(mapStateToProps)(NewTweet);