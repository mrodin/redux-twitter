export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return time.substr(0, 4) + ' ' + time.slice(-2) + ' - ' + d.toLocaleDateString('en-US', options)
}

export function formatTweet (tweet, author, authedUser, parentTweet) {
  const { id, likes, replies, text, timestamp } = tweet
  const { name, avatarURL } = author
  const uid = author.id

  return {
    name,
    uid,
    id,
    timestamp,
    text,
    avatar: avatarURL,
    likes: likes.length,
    replies: replies.length,
    hasLiked: likes.includes(authedUser),
    parent: !parentTweet ? null : {
      author: parentTweet.author,
      id: parentTweet.id,
    }
  }
}