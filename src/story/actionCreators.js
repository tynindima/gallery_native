export {
  SET_PHOTOS,
  SET_IS_MODAL,
  SET_FULL_PHOTO
} from './types';

export const setPhotos = (photos) => ({ type: SET_PHOTOS, payload: photos });
export const setIsModal = (isModal) => ({ type: SET_IS_MODAL, payload: isModal });
export const setFullPhoto = (photo) => ({ type: SET_FULL_PHOTO, payload: photo });
