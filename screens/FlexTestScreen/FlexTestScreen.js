import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';

import Flex from '../../components/FlexContainer/FlexContainer';

function FlexTestScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Flex />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FlexTestScreen;
