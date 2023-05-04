import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
// import {EventRegister} from 'react-native-event-listeners';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{marginTop: 100}}>
        <Text style={styles.title}>
          Welcome to home page
          <Text role="img" aria-label="Greeting icon">
            💁‍♀️
          </Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Flex test"
          onPress={() => navigation.navigate('Flex test')}
        />
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
        <Button
          title="Go to My list"
          onPress={() => navigation.navigate('My list')}
        />
        <Button
          title="Go to Images"
          onPress={() => navigation.navigate('Images screen')}
        />
        <Button
          title="Go to User"
          onPress={() => navigation.navigate('User')}
        />
        <Button
          title="Go to Practice context"
          onPress={() => navigation.navigate('Practice context')}
        />
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
    backgroundColor: 'lightgreen',
  },
  buttonContainer: {flex: 1, gap: 10, justifyContent: 'flex-end'},
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    fontFamily: 'Georgia',
  },
});

export default HomeScreen;
