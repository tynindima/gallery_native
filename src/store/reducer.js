export {
  SET_PHOTOS,
  SET_IS_MODAL,
  SET_FULL_PHOTO
} from './types';

const initialState = {
  photos: [],
  isModal: false,
  fullPhoto: '',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PHOTOS:
      return {
        ...state,
        photos: action.payload,
      };
    case SET_IS_MODAL:
      return {
        ...state,
        isModal: action.payload,
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
