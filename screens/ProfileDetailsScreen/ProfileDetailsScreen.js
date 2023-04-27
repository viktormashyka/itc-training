import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

function ProfileDetailsScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <View style={styles.containerBox}>
        <Text style={styles.text}>
          First name: {route?.params?.inputFirstName}
        </Text>
        <Text style={styles.text}>
          Last name: {route?.params?.inputLastName}
        </Text>
        <Text style={styles.text}>Age: {route?.params?.inputAge}</Text>
      </View>
      <View style={{gap: 10}}>
        <Button
          title="Go to Home"
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Button
          title="Go to Details"
          onPress={() => {
            navigation.navigate('Details');
          }}
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
  },
  containerBox: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileDetailsScreen;
