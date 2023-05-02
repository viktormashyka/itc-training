import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const UserForm = props => {
  const [userName, setUserName] = useState('');
  const [userLanguage, setUserLanguage] = useState('');
  const [userPlace, setUserPlace] = useState('');

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.labelText}>Input User data:</Text>
      <TextInput
        style={styles.inputField}
        onChangeText={changeText => setUserName(changeText)}
        value={userName}
        placeholder="User name"
      />
      <TextInput
        style={styles.inputField}
        onChangeText={changeText => setUserLanguage(changeText)}
        value={userLanguage}
        placeholder="User language"
      />
      <TextInput
        style={styles.inputField}
        onChangeText={changeText => setUserPlace(changeText)}
        value={userPlace}
        placeholder="User place"
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (!userName || !userLanguage || !userPlace) {
            return;
          }
          const newUserRecord = {
            name: userName,
            language: userLanguage,
            place: userPlace,
          };

          // path this newUserRecord object out to parent object
          if (props.onFormSubmit) {
            props.onFormSubmit(newUserRecord);
          }
          console.log(newUserRecord);
          //   setListData([...listData, newUserRecord]);

          setUserName('');
          setUserLanguage('');
          setUserPlace('');
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
