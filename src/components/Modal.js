import React from 'react';
import Tweet from './Tweet';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal';

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
      contentLabel="Minimal Modal Example"
    >
      {modal.modalProps.tweetId &&
        <Tweet id={modal.modalProps.tweetId} />
      }
      <button onClick={handleCloseModal}>Close Modal</button>
    </ReactModal>
  )
}

function mapStateToProps({ modal }) {
  return {
    modal
  }
}

export default connect(mapStateToProps)(Modal);