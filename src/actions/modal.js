export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export function openModal(id) {
  return {
    type: OPEN_MODAL,
    modalProps: {
      tweetId: id
    }
  }
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}