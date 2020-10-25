export const GET_ITEM_REQUEST = 'GET_ITEM_REQUEST';
export const GET_ITEM_SUCCESS = 'GET_ITEM_SUCCESS';
export const GET_ITEM_FAIL = 'GET_ITEM_FAIL';

export const getItemRequest = (title) => ({
  type: GET_ITEM_REQUEST,
  payload: {
    title,
  },
});

export const getItemSuccess = (item) => ({
  type: GET_ITEM_SUCCESS,
  payload: {
    item,
  },
});

export const getItemFail = (message) => ({
  type: GET_ITEM_FAIL,
  payload: {
    message,
  },
});
