import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal';

const initialState = {
  showModal: false,
  modalProps: {}
}

export default function modal(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        showModal: true,
        modalProps: action.modalProps
      }
    case CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
}