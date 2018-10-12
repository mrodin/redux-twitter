import React from 'react';

const Avatar = (props) => {
  return (
    <div>
      <img src={props.avatarUrl} className='avatar' alt="Author's avatar" />
    </div>
  )
}

export default Avatar;