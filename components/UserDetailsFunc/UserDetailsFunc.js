import React, {useState, useEffect, useMemo, memo} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import styles from '../UserDetailsFunc/UserDetailsFuncStyles';

const UserDetailsFunc = props => {
  // const [userData, setUserData] = useState({
  //   firstName: props?.user?.firstName,
  //   lastName: props?.user?.lastName,
  //   gender: props?.user?.gender,
  //   age: props?.user?.age,
  //   dob: props?.user?.dob,
  //   contactNumber: props?.user?.contactNumber,
  //   homePhone: props?.user?.homePhone,
  //   education: props?.user?.education,
  //   degree: props?.user?.degree,
  // });
  console.log('UserDetailsFunc props: ', props);

  const [firstName, setFirstName] = useState(props?.user?.firstName);
  const [lastName, setLastName] = useState(props?.user?.lastName);
  const [gender, setGender] = useState(props?.user?.gender);

  useEffect(() => {
    console.log('UserDetailsFunc > componentDidMount');

    return () => {
      console.log('UserDetailsFunc > componentWillUnmount');
    };
  }, []);

  // useEffect(() => {
  //   console.log('UserDetailsFunc > componentDidUpdate');
  //   setUserData({
  //     firstName: props?.user?.firstName,
  //     lastName: props?.user?.lastName,
  //     gender: props?.user?.gender,
  //     age: props?.user?.age,
  //     dob: props?.user?.dob,
  //     contactNumber: props?.user?.contactNumber,
  //     homePhone: props?.user?.homePhone,
  //     education: props?.user?.education,
  //     degree: props?.user?.degree,
  //   });
  // }, [props]);

  useEffect(() => {
    console.log('Userdetailsfunct > componentdidupdate');

    setFirstName(props?.user?.firstName);
    setLastName(props?.user?.lastName);
    setGender(props?.user?.gender);
  }, [props.user]);

  const convertToFahrenheit = useMemo(() => {
    console.log('UserdetailsFunt > conversion function');
    return props.celcius * 1.8 + 32;
  }, [props.celcius]);

  // const renderPersonalFields = () => {
  //   return (
  //     <>
  //       <TextInput
  //         style={[styles.inputField]}
  //         onChangeText={changedText => {
  //           setUserData(prevState => {
  //             return {...prevState, firstName: changedText};
  //           });
  //         }}
  //         value={userData.firstName}
  //         placeholder="First Name"
  //       />
  //       <TextInput
  //         style={styles.inputField}
  //         onChangeText={changedText => {
  //           setUserData(prevState => {
  //             return {...prevState, lastName: changedText};
  //           });
  //         }}
  //         value={userData.lastName}
  //         placeholder="Last Name"
  //       />
  //       <TextInput
  //         style={styles.inputField}
  //         onChangeText={changedText => {
  //           setUserData(prevState => {
  //             return {...prevState, gender: changedText};
  //           });
  //         }}
  //         value={userData.gender}
  //         placeholder="Gender"
  //       />
  //       <TextInput
  //         style={styles.inputField}
  //         onChangeText={changedText => {
  //           setUserData(prevState => {
  //             return {...prevState, age: changedText};
  //           });
  //         }}
  //         value={userData.age}
  //         placeholder="Age"
  //       />
  //       <TextInput
  //         style={styles.inputField}
  //         onChangeText={changedText => {
  //           setUserData(prevState => {
  //             return {...prevState, dob: changedText};
  //           });
  //         }}
  //         value={userData.dob}
  //         placeholder="Dob"
  //       />
  //       {/* <TextInput
  //         style={styles.inputField}
  //         onChangeText={changedText => {
  //           setUserData(prevState => {
  //             return {...prevState, contactNumber: changedText};
  //           });
  //         }}
  //         value={userData.contactNumber}
  //         placeholder="Contact number"
  //       /> */}
  //       {/* <TextInput
  //         style={styles.inputField}
  //         onChangeText={changedText => {
  //           setUserData(prevState => {
  //             return {...prevState, homePhone: changedText};
  //           });
  //         }}
  //         value={userData.homePhone}
  //         placeholder="Home phone"
  //       /> */}
  //       {/* <TextInput
  //         style={styles.inputField}
  //         onChangeText={changedText => {
  //           setUserData(prevState => {
  //             return {...prevState, education: changedText};
  //           });
  //         }}
  //         value={userData.education}
  //         placeholder="Education"
  //       /> */}
  //       {/* <TextInput
  //         style={styles.inputField}
  //         onChangeText={changedText => {
  //           setUserData(prevState => {
  //             return {...prevState, degree: changedText};
  //           });
  //         }}
  //         value={userData.degree}
  //         placeholder="Degree"
  //       /> */}
  //     </>
  //   );
  // };

  const renderPersonalFields = () => {
    return (
      <>
        <TextInput
          onChangeText={changedText => {
            setFirstName(changedText);
          }}
          value={firstName}
          placeholder="First Name"
          style={styles.inputField}
        />

        <TextInput
          onChangeText={changedText => {
            setLastName(changedText);
          }}
          value={lastName}
          placeholder="Last Name"
          style={styles.inputField}
        />

        <TextInput
          onChangeText={changedText => {
            setGender(changedText);
          }}
          value={gender}
          placeholder="Gender"
          style={styles.inputField}
        />
      </>
    );
  };

  console.log('UserDetailsFunc > render');
  return (
    <View style={styles.container}>
      {renderPersonalFields()}
      <Text style={styles.labelText}>Fahrenheit: {convertToFahrenheit}</Text>
      <Button
        title="Change text"
        onPress={() => {
          if (!firstName || !lastName || !gender) {
            return;
          }
          if (props.onSubmitBtnPress) {
            props.onSubmitBtnPress({firstName, lastName, gender});
          }
        }}
      />
    </View>
  );
};

export default memo(UserDetailsFunc);

// export default UserDetailsFunc;
