import React, {createContext, useContext} from 'react';
import {View, Button, Text} from 'react-native';
import styles from './PracticeAPIScreenStyles';

import {TestAPIlist} from '../../components';

const PracticeAPIScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text>Practice API</Text>
        <TestAPIlist />
      </View>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default PracticeAPIScreen;
