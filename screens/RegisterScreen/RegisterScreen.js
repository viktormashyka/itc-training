import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, Button} from 'react-native';
import styles from './RegisterScreenStyles';

const initialUserData = {userName: '', userEmail: '', userPassword: ''};

const RegisterScreen = ({navigation}) => {
  const [userData, setUserData] = useState(initialUserData);

  const handleSubmit = () => {
    if (!userData.userEmail || !userData.userEmail) {
      return;
    }
    const newUserRecord = {
      userName: userData.userName,
      userEmail: userData.userEmail,
      userPassword: userData.userPassword,
    };
    console.log('newUserRecord: ', newUserRecord);
    navigation.navigate('Login');
    setUserData(initialUserData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Register form:</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={changeText =>
            setUserData(prevSate => {
              return {...prevSate, userName: changeText};
            })
          }
          value={userData.userName}
          placeholder="User name"
        />
        <TextInput
          style={styles.inputField}
          onChangeText={changeText =>
            setUserData(prevSate => {
              return {...prevSate, userEmail: changeText};
            })
          }
          value={userData.userEmail}
          placeholder="User email"
        />
        <TextInput
          style={styles.inputField}
          onChangeText={changeText =>
            setUserData(prevSate => {
              return {...prevSate, userPassword: changeText};
            })
          }
          value={userData.userPassword}
          placeholder="User password"
        />
        <TouchableOpacity
          activeOpacity={0.3}
          style={styles.button}
          onPress={handleSubmit}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <Button
          title="Have you login?"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </View>
  );
};

export default RegisterScreen;
