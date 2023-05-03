import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const UserForm = props => {
  // const [userName, setUserName] = useState('');
  // const [userLanguage, setUserLanguage] = useState('');
  // const [userPlace, setUserPlace] = useState('');
  const [userData, setUserData] = useState({
    userName: '',
    userLanguage: '',
    userPlace: '',
  });

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.labelText}>Input User data:</Text>
      <TextInput
        style={styles.inputField}
        // onChangeText={changeText => setUserName(changeText)}
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
        // onChangeText={changeText => setUserLanguage(changeText)}
        onChangeText={changeText =>
          setUserData(prevSate => {
            return {...prevSate, userLanguage: changeText};
          })
        }
        value={userData.userLanguage}
        placeholder="User language"
      />
      <TextInput
        style={styles.inputField}
        // onChangeText={changeText => setUserPlace(changeText)}
        onChangeText={changeText =>
          setUserData(prevState => {
            return {...prevState, userPlace: changeText};
          })
        }
        value={userData.userPlace}
        placeholder="User place"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (
            !userData.userName ||
            !userData.userLanguage ||
            !userData.userPlace
          ) {
            return;
          }
          const newUserRecord = {
            name: userData.userName,
            language: userData.userLanguage,
            place: userData.userPlace,
          };

          // path this newUserRecord object out to parent object
          if (props.onFormSubmit) {
            props.onFormSubmit(newUserRecord);
          }
          console.log(newUserRecord);
          //   setListData([...listData, newUserRecord]);

          // setUserName('');
          // setUserLanguage('');
          // setUserPlace('');
          setUserData({userName: '', userLanguage: '', userPlace: ''});
        }}>
        <Text style={styles.buttonText}>Insert</Text>
      </TouchableOpacity>
    </View>
  );
};

UserForm.prototype = {
  onFormSubmit: PropTypes.func,
};

UserForm.defaultProps = {
  onFormSubmit: () => {},
};

export default UserForm;
