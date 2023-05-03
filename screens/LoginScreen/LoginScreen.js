import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View, Button} from 'react-native';
// import PropTypes from 'prop-types';
import styles from '../LoginScreen/LoginScreenStyles';

const initialUserData = {userEmail: '', userPassword: ''};

const LoginScreen = ({navigation}) => {
  const [userData, setUserData] = useState(initialUserData);

  const handleSubmit = () => {
    if (!userData.userEmail || !userData.userEmail) {
      return;
    }
    const userRecord = {
      userEmail: userData.userEmail,
      userPassword: userData.userPassword,
    };
    // if (props.onFormSubmit) {
    //   props.onFormSubmit(userRecord);
    // }
    console.log('userRecord: ', userRecord);
    setUserData(initialUserData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.labelText}>Login form:</Text>
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
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Button
          title="Don't have login"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
};

// LoginScreen.prototype = {
//   onFormSubmit: PropTypes.func,
// };

// LoginScreen.defaultProps = {
//   onFormSubmit: () => {},
// };

export default LoginScreen;
