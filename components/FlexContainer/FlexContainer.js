import React from 'react';
import {View, StyleSheet} from 'react-native';

const Flex = () => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: 'row',
          // position: 'relative',
        },
      ]}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'red',
          width: 80,
          height: 80,
          alignSelf: 'flex-start',
          // position: 'absolute',
          // top: 100,
          // left: 100,
        }}
      />
      <View
        style={{
          flex: 2,
          backgroundColor: 'darkorange',
          width: 100,
          height: 100,
          alignSelf: 'flex-end',
          // position: 'absolute',
          // top: 100,
          // left: 100,
        }}
      />
      <View
        style={{
          flex: 3,
          backgroundColor: 'green',
          width: 120,
          height: 120,
          alignSelf: 'flex-start',
          // position: 'absolute',
          // top: 100,
          // left: 100,
        }}
      />
    </View>
  );
};

export default Flex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
