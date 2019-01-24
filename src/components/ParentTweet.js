import React from 'react';
import { openModal } from '../actions/modal';
import { connect } from 'react-redux';

const ParentTweet = (props) => {
  const { dispatch, id } = props;

  const handleOpenModal = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(openModal(id));
  }

  return (
    <div className='parent-tweet' onClick={handleOpenModal}>
      {React.cloneElement(props.children, { id: id })}
    </div>
  )
}

export default connect()(ParentTweet);