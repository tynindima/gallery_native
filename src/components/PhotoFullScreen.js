import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';

export const PhotoFullScreen = (props) => {
  const { photo, onModal, isModal } = props;

  return (
    <Modal
      animationType="slide"
      visible={isModal}
    >
      <TouchableWithoutFeedback onLongPress={() => onModal(false)}>
        <View style={styles.screen}>
          <Image style={styles.image} source={{ uri: photo }} />
        </View>
      </TouchableWithoutFeedback>
    </Modal>

  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  image: {
    height: (Dimensions.get('window').height),
    width: (Dimensions.get('window').width),
  },
});
