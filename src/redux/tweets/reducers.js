import {
  ADD_TWEET,
  REMOVE_TWEET,
  UPDATE_TWEET,
  FETCH_TWEET,
  FETCH_TWEETS
} from './actions';

const initialState = {
  items: [],
  currentItem: {},
  isCreated: false,
  isUpdated: false,
  isDeleted: false,
}

export default function (state = initialState, action) {
  console.log("reducerrr-->", action)
  switch (action.type) {
    case ADD_TWEET:
      return {
        ...state,
        ...action.payload
      };
    case UPDATE_TWEET:
      return {
        ...state,
        ...action.payload
      };
    case REMOVE_TWEET:
      return {
        ...state,
        ...action.payload
      };
    case FETCH_TWEET:
      return {
        ...state,
        ...action.payload
      };
    case FETCH_TWEETS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}