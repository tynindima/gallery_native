const URL_PHOTOS = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

const getDate = async (url) => {
  const response = await fetch(url);

  return response.json();
};

export const getPhotos = () => getDate(URL_PHOTOS);
