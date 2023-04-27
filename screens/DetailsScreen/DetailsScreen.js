import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

function DetailsScreen({navigation}) {
  const [inputFirstName, setInputFirstName] = useState('');
  const [inputLastName, setInputLastName] = useState('');
  const [inputAge, setInputAge] = useState('');
  return (
    <View style={styles.container}>
      <View style={{flex: 1, gap: 10}}>
        <TextInput
          onChangeText={changedText => setInputFirstName(changedText)}
          value={inputFirstName}
          placeholder="Please add your first name..."
          style={styles.inputField}
        />
        <TextInput
          onChangeText={changedText => setInputLastName(changedText)}
          value={inputLastName}
          placeholder="Please add your last name..."
          style={styles.inputField}
        />
        <TextInput
          onChangeText={changedText => setInputAge(changedText)}
          value={inputAge}
          placeholder="Please add your age..."
          style={styles.inputField}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate('ProfileDetails', {
              inputFirstName,
              inputLastName,
              inputAge,
            });
          }}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      {/* <Button
        title="Do to Details ... again"
        onPress={() => {
          navigation.push('Details');
        }}
      /> */}

      {/* <Button title="Go to Text" onPress={() => navigation.navigate('Text')} /> */}
      {/* <Button title="Go back" onPress={() => navigation.goBack()} /> */}
      {/* <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // gap: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputField: {
    borderRadius: 4,
    width: 300,
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: 'lightblue',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DetailsScreen;
