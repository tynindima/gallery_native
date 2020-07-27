import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions
} from 'react-native';

import Photo from '../components/Photo';
import { getPhotosFromServer } from '../store/actionCreators';

const MainScreen = (props) => {
  const {
    photos,
    onPhotoFromServer,
    navigation
  } = props;

  useEffect(() => {
    onPhotoFromServer();
  }, []);

  return (
    <View>
      <View style={styles.container}>
        <ScrollView>
          {photos.map((photo) => (
            <Photo key={photo.id} photo={photo} navigation={navigation} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: (Dimensions.get('window').height) - 90,
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
