import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to home page
        <Text role="img" aria-label="Greeting icon">
          💁‍♀️
        </Text>
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="Go to Profile details"
          onPress={() => navigation.navigate('ProfileDetails')}
        />
        <Button
          title="Go to Flex test"
          onPress={() => navigation.navigate('FlexTest')}
        />
        <Button
          title="Go to My list"
          onPress={() => navigation.navigate('MyList')}
        />
        {/* <Button
          title="Go to List item"
          onPress={() => navigation.navigate('ListItem')}
        /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  buttonContainer: {flex: 1, gap: 10, justifyContent: 'flex-end'},
  title: {
    fontSize: 48,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
