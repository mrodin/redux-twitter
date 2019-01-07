import React from 'react';
import { openModal } from '../actions/modal';
import { connect } from 'react-redux';

const ParentTweet = (props) => {
  const { dispatch } = props;

  const handleOpenModal = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(openModal(props.id));
  }

  return (
    <div onClick={handleOpenModal}>
      {props.children}
    </div>
  )
}

export default connect()(ParentTweet);