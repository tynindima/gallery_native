import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Button,
  Dimensions,
} from 'react-native';

import { Navbar } from './src/components/Navbar';
import { Photo } from './src/components/Photo';
import { getPhotos } from './src/getData';
import { PhotoFullScreen } from './src/components/PhotoFullScreen';

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [fullPhoto, setFullPhoto] = useState('');

  const getPhotoHandler = async () => {
    const photosFromServer = await getPhotos();
    setPhotos(photosFromServer);
  };

  const togglerOfModal = (modal) => {
    setIsModal(modal);
  };

  const getFullPhoto = (photo) => {
    setFullPhoto(photo);
    setIsModal(true);
  };

  return (
    <View>
      <Navbar title="Gallery" />
      <View style={styles.buttonContainer}>
        <Button title="Get photo" onPress={getPhotoHandler} />
      </View>
      <View style={styles.container}>
        <ScrollView>
          {photos.map((photo) => (
            <Photo key={photo.id} photo={photo} getFullPhoto={getFullPhoto} />
          ))}
        </ScrollView>
      </View>
      <PhotoFullScreen
        isModal={isModal}
        photo={fullPhoto}
        onModal={togglerOfModal}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: (Dimensions.get('window').height) - 85,
  },
  buttonContainer: {
    marginVertical: 1,
    marginHorizontal: 10,
    borderRadius: 5,
  },
});
