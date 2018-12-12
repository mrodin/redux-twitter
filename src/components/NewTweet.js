import React, { Component } from 'react'
import Avatar from './Avatar';
import { connect } from 'react-redux';
import { handleAddTweet } from '../actions/tweets';

export class NewTweet extends Component {
  state = {
    text: ''
  }

  handleInputChange = (e) => {
    const { value, name } = e.target;

    this.setState(() => ({
      [name]: value
    }))
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
    const { text } = this.state;
    const { avatar } = this.props;

    return (
      <form className='new-tweet flex flex--column' onSubmit={this.handleTweet}>
        <div className='flex'>
          <Avatar avatarUrl={avatar} />
          <input
            value={text}
            name='text'
            placeholder="What's up?"
            className='new-tweet__textbox'
            onChange={this.handleInputChange}
            type='text'
          />
        </div>
        <button type='submit' className='new-tweet__button'>Tweet</button>
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