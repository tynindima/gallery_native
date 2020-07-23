import {
  SET_PHOTOS,
  SET_FULL_PHOTO
} from './types';
import { getPhotos } from '../getData';

export const setPhotos = (photos) => ({ type: SET_PHOTOS, payload: photos });
export const setFullPhoto = (photo) => ({ type: SET_FULL_PHOTO, payload: photo });

export const getPhotosFromServer = () => async (dispatch) => {
  const photosFromServer = await getPhotos();

  dispatch(setPhotos(photosFromServer));
};
