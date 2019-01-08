import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal';
import TweetDetail from './TweetDetail';

const Modal = (props) => {
  const { dispatch, modal } = props;

  const handleCloseModal = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch(closeModal());
  }

  return (
    <ReactModal
      isOpen={modal.showModal}
      contentLabel="Tweet Detail Modal"
      onRequestClose={handleCloseModal}
      overlayClassName="overlay flex flex--center"
      className="modal flex flex--center"
    >
      {modal.modalProps.tweetId &&
        <TweetDetail id={modal.modalProps.tweetId} />
      }
    </ReactModal>
  )
}

function mapStateToProps({ modal }) {
  return {
    modal
  }
}

export default connect(mapStateToProps)(Modal);