import React from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

const FastImageContainer = ({item}) => {
  return (
    <FastImage
      style={styles.fastImage}
      source={{
        uri: item?.imageURL,
        headers: {Authorization: 'someAuthToken'},
        priority: FastImage.priority.normal,
      }}
      resizeMode={FastImage.resizeMode.contain}
    />
  );
};

export default FastImageContainer;
