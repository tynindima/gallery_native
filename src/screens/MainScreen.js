import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Button,
  ScrollView,
  Dimensions
} from 'react-native';

import { getPhotos } from '../getData';
import { setPhotos } from '../store/actionCreators';
import Photo from '../components/Photo';
import { Navbar } from '../components/Navbar';
import PhotoFullScreen from '../components/PhotoFullScreen';

const MainScreen = (props) => {
  const {
    photos,
    onPhotos,
  } = props;

  const getPhotoHandler = async () => {
    const photosFromServer = await getPhotos();
    onPhotos(photosFromServer);
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
            <Photo key={photo.id} photo={photo} />
          ))}
        </ScrollView>
      </View>
      <PhotoFullScreen />
    </View>
  );
};

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

const mapStateToProps = (state) => ({
  photos: state.phoros,
});

const mapDispatchToProps = {
  onPhotos: setPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
