import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const PhotoFullScreen = (props) => {
  const { photo } = props;

  return (
    <View style={styles.screen}>
      <Image style={styles.image} source={{ uri: photo }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {},
  image: {
    height: (Dimensions.get('window').height),
    width: (Dimensions.get('window').width),
  },
});

const mapStateToProps = (state) => ({
  photo: state.fullPhoto,
});

export default connect(mapStateToProps)(PhotoFullScreen);
