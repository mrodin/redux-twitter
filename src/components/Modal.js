import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modal';
import TweetDetail from './TweetDetail';

const Modal = (props) => {
  const { dispatch, modal } = props;

  const disableScroll = () => { document.body.style.overflow = 'hidden' }

  const handleCloseModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    document.body.style.overflow = 'initial';

    dispatch(closeModal());
  }

  return (
    <ReactModal
      isOpen={modal.showModal}
      onAfterOpen={disableScroll}
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