import React, { Component } from 'react'
import Tweet from './Tweet';
import NewTweet from './NewTweet';
import { connect } from 'react-redux';

export class TweetDetail extends Component {
  render() {
    return (
      <div className='dashboard-container'>
        <Tweet id={this.props.id} />
        <NewTweet placeholderText='Tweet your reply' />
        <ul>
          {this.props.replies.map((id) => (
            <li key={id}>
              <Tweet id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ tweets }, { id }) {
  return {
    id,
    replies: !tweets[id]
      ? []
      : tweets[id].replies.sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
  }
}

export default connect(mapStateToProps)(TweetDetail);