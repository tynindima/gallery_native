import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  Button,
  ScrollView,
  Dimensions
} from 'react-native';

import Photo from '../components/Photo';
import { Navbar } from '../components/Navbar';
import PhotoFullScreen from '../components/PhotoFullScreen';
import { getPhotosFromServer} from '../store/actionCreators';

const MainScreen = (props) => {
  const {
    photos,
    onPhotoFromServer,
  } = props;

  return (
    <View>
      <Navbar title="Gallery" />
      <View style={styles.buttonContainer}>
        <Button title="Get photo" onPress={onPhotoFromServer} />
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
    height: (Dimensions.get('window').height) - 75,
  },
  buttonContainer: {
    marginVertical: 1,
    marginHorizontal: 10,
    borderRadius: 5,
  },
});

const mapStateToProps = (state) => ({
  photos: state.photos,
});

const mapDispatchToProps = {
  onPhotoFromServer: getPhotosFromServer,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
