import React, { Component } from 'react'
import { connect } from 'react-redux';

class Dashboard extends Component {
  render() {
    const { tweetIds } = this.props;

    return (
      <div>
        <h1>Tweet IDs:</h1>
        <ul>
          {tweetIds.map((id) => (
            <li key={id}>
              {id}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ tweets }) {
  return {
    tweetIds: Object.keys(tweets)
  }
}

export default connect(mapStateToProps)(Dashboard);