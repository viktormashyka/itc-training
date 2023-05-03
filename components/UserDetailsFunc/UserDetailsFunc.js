import React, {useState, useEffect} from 'react';
import {TextInput, View} from 'react-native';
import styles from '../UserDetailsFunc/UserDetailsFuncStyles';

const UserDetailsFunc = props => {
  const [userData, setUserData] = useState({
    firstName: props?.user?.firstName,
    lastName: props?.user?.lastName,
    gender: props?.user?.gender,
    age: props?.user?.age,
    dob: props?.user?.dob,
    contactNumber: props?.user?.contactNumber,
    homePhone: props?.user?.homePhone,
    education: props?.user?.education,
    degree: props?.user?.degree,
  });

  //   const caclulateFahrenheit = () => {};

  useEffect(() => {
    console.log('UserDetailsFunc > componentDidMount');
    return () => {
      console.log('UserDetailsFunc > componentWillUnmount');
    };
  }, []);

  useEffect(() => {
    console.log('UserDetailsFunc > componentDidUpdate');
    setUserData({
      firstName: props?.user?.firstName,
      lastName: props?.user?.lastName,
      gender: props?.user?.gender,
      age: props?.user?.age,
      dob: props?.user?.dob,
      contactNumber: props?.user?.contactNumber,
      homePhone: props?.user?.homePhone,
      education: props?.user?.education,
      degree: props?.user?.degree,
    });
  }, [props]);

  const renderPersonalFields = () => {
    return (
      <>
        <TextInput
          style={[styles.inputField]}
          onChangeText={changedText => {
            setUserData(prevState => {
              return {...prevState, firstName: changedText};
            });
          }}
          value={userData.firstName}
          placeholder="First Name"
        />
        <TextInput
          style={styles.inputField}
          onChangeText={changedText => {
            setUserData(prevState => {
              return {...prevState, lastName: changedText};
            });
          }}
          value={userData.lastName}
          placeholder="Last Name"
        />
        <TextInput
          style={styles.inputField}
          onChangeText={changedText => {
            setUserData(prevState => {
              return {...prevState, gender: changedText};
            });
          }}
          value={userData.gender}
          placeholder="Gender"
        />
        <TextInput
          style={styles.inputField}
          onChangeText={changedText => {
            setUserData(prevState => {
              return {...prevState, age: changedText};
            });
          }}
          value={userData.age}
          placeholder="Age"
        />
        <TextInput
          style={styles.inputField}
          onChangeText={changedText => {
            setUserData(prevState => {
              return {...prevState, dob: changedText};
            });
          }}
          value={userData.dob}
          placeholder="Dob"
        />
        <TextInput
          style={styles.inputField}
          onChangeText={changedText => {
            setUserData(prevState => {
              return {...prevState, contactNumber: changedText};
            });
          }}
          value={userData.contactNumber}
          placeholder="Contact number"
        />
        {/* <TextInput
          style={styles.inputField}
          onChangeText={changedText => {
            setUserData(prevState => {
              return {...prevState, homePhone: changedText};
            });
          }}
          value={userData.homePhone}
          placeholder="Home phone"
        /> */}
        {/* <TextInput
          style={styles.inputField}
          onChangeText={changedText => {
            setUserData(prevState => {
              return {...prevState, education: changedText};
            });
          }}
          value={userData.education}
          placeholder="Education"
        /> */}
        {/* <TextInput
          style={styles.inputField}
          onChangeText={changedText => {
            setUserData(prevState => {
              return {...prevState, degree: changedText};
            });
          }}
          value={userData.degree}
          placeholder="Degree"
        /> */}
      </>
    );
  };
  console.log('UserDetailsFunc > render');
  return <View style={{flex: 1}}>{renderPersonalFields()}</View>;
};

export default UserDetailsFunc;
