import {
  SET_PHOTOS,
  SET_FULL_PHOTO
} from './types';

const initialState = {
  photos: [],
  fullPhoto: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
    case SET_FULL_PHOTO:
      return {
        ...state,
        fullPhoto: action.payload,
      };
    default:
      return state;
  }
};
