import React from 'react';
import { connect } from 'react-redux';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Modal,
  TouchableWithoutFeedback
} from 'react-native';
import { setIsModal } from '../store/actionCreators';

const PhotoFullScreen = (props) => {
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

const mapStateToProps = (state) => ({
  photo: state.fullPhoto,
  isModal: state.isModal,

});

const mapDispatchToProps = {
  onModal: setIsModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoFullScreen);
