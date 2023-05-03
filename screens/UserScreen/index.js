import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import {UserDetailsFunc} from '../../components';
import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';

// const initialState = {
//   user: {
//     firstName: '',
//     lastName: '',
//     gender: '',
//     age: '',
//     dob: '',
//     contactNumber: '',
//     homePhone: '',
//     education: '',
//     degree: '',
//   },
//   sampleTextinput: '',
// };

const UserScreen = props => {
  console.log('UserScreen props: ', props);

  const [user, setUser] = useState({});
  const [sampleTextinput, setSampleTextinput] = useState('');
  const [celciusVal, setCelciusVal] = useState(30);

  // useEffect(() => {
  //   console.log('userscreen > componentdidmount');
  // }, []);

  // useEffect(() => {
  //   console.log('userscreen > componentDidUpdate');
  // }, [props]);

  useEffect(() => {
    getData('userObjectStr');
  }, []);

  // const storeData = async value => {
  //   try {
  //     const jsonValue = JSON.stringify(value);
  //     await AsyncStorage.setItem('@storage_Key', jsonValue);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // const getData = async () => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem('@storage_Key');
  //     return jsonValue != null ? JSON.parse(jsonValue) : null;
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const getData = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const userObjectRecovered = JSON.parse(value);
        setUser(userObjectRecovered);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitBtnPress = useCallback(
    userObject => {
      // setUser({
      //   firstName: 'Firdous2',
      //   lastName: 'Ali2',
      //   gender: 'Male2',
      //   age: '302',
      //   dob: '1/1/802',
      //   contactNumber: '+444444442',
      //   homePhone: '+555555552',
      //   education: 'MS2',
      //   degree: 'CIS2',
      // });
      setCelciusVal(90);

      console.log('userObject: ', userObject);

      const userObjectStringified = JSON.stringify(userObject);

      AsyncStorage.setItem('userObjectStr', userObjectStringified);
    },
    [user, celciusVal],
  );

  console.log('usercreen > render');

  return (
    <View style={{flex: 1, backgroundColor: '#ECA1A1'}}>
      <ScrollView>
        <UserDetailsFunc
          user={user}
          celcius={celciusVal}
          onSubmitBtnPress={onSubmitBtnPress}
        />
        {/* <Button
          title="Change text on Ali"
          onPress={() => {
            setUser({
              user: {
                firstName: 'Firdous',
                lastName: 'Ali',
                gender: 'Male',
                age: '30',
                dob: '1/1/82',
                contactNumber: '+444444442',
                homePhone: '+555555552',
                education: 'MS2',
                degree: 'CIS2',
              },
            });
            setCelciusVal(45);
          }}
        /> */}
        {/* <Button
          title="Change text on Viktor"
          onPress={() => {
            setUser({
              user: {
                firstName: 'Viktor',
                lastName: 'Mashyka',
                gender: 'Male',
                age: '42',
                dob: '1/1/80',
                contactNumber: '+44444444',
                homePhone: '+55555555',
                education: 'MS',
                degree: 'CIS',
              },
            });
            setCelciusVal(90);
          }}
        /> */}

        <TextInput
          style={{
            margin: 20,
            backgroundColor: 'white',
            height: 40,
            paddingHorizontal: 10,
          }}
          onChangeText={changedText => {
            setSampleTextinput(changedText);
          }}
          value={sampleTextinput}
          placeholder="TextInput on userscreen"
        />
      </ScrollView>
      <Button
        title="Go to Home"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
};

export default UserScreen;
