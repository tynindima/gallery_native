import React from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  Text
} from 'react-native';
import { setFullPhoto, setIsModal } from '../store/actionCreators';

const Photo = (props) => {
  const { photo, onFullPhoto, onIsModal } = props;
  const { user } = photo;

  const handlerIsModal = (singlePhoto) => {
    onFullPhoto(singlePhoto);
    onIsModal(true);
  };

  return (
    <View style={styles.imageWrap}>
      <TouchableWithoutFeedback onPress={() => handlerIsModal(photo.urls.full)}>
        <Image
          style={styles.image}
          source={{ uri: photo.urls.small }}
        />
      </TouchableWithoutFeedback>
      <Text>{`Description: ${photo.alt_description}`}</Text>
      <Text>{`Autor: ${user.name}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: (Dimensions.get('window').height / 3) - 12,
    width: (Dimensions.get('window').width) - 20,
    alignSelf: 'stretch',
  },
  imageWrap: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  title: {
    backgroundColor: 'grey',
  },
});

const mapDispatchToProps = {
  onFullPhoto: setFullPhoto,
  onIsModal: setIsModal,
};

export default connect(null, mapDispatchToProps)(Photo);
