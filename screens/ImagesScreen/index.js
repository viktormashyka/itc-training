import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
// import {FastImageContainer} from '../../components';
import {FlatListContainer} from '../../components';
import {FastImagePlaceholder} from '../../components';
import {UserDetails} from '../../components';
import styles from './styles';

function ImagesScreen({navigation}) {
  return (
    <View style={styles.container}>
      <FlatListContainer />
      <UserDetails />
      <FastImagePlaceholder />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

export default ImagesScreen;
