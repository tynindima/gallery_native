import React from 'react';
import {
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  View,
  Dimensions,
  Text
} from 'react-native';

export const Photo = (props) => {
  const { photo, getFullPhoto } = props;
  const { user } = photo;

  return (
    <View style={styles.imageWrap}>
      <TouchableWithoutFeedback onPress={() => getFullPhoto(photo.urls.full)}>
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
