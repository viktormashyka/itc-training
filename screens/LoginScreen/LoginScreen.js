import React from 'react';
import {View, TextInput, StyleSheet, Button, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {EventRegister} from 'react-native-event-listeners';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
});

const LoginScreen = ({navigation}) => {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, {resetForm}) => {
    console.log(values);
    const userRecord = {
      name: values.name,
      email: values.email,
    };
    console.log('userRecord: ', userRecord);

    EventRegister.emit('checkInEvent', true);
    // resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {touched.email && errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {touched.password && errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}
          <Button title="Submit" onPress={handleSubmit} />
          <Button
            title="Don't have login?"
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginScreen;

// import React, {useState} from 'react';
// import {Text, TextInput, TouchableOpacity, View, Button} from 'react-native';
// // import PropTypes from 'prop-types';
// import styles from '../LoginScreen/LoginScreenStyles';

// const initialUserData = {userEmail: '', userPassword: ''};

// const LoginScreen = ({navigation}) => {
//   const [userData, setUserData] = useState(initialUserData);

//   const handleSubmit = () => {
//     if (!userData.userEmail || !userData.userEmail) {
//       return;
//     }
//     const userRecord = {
//       userEmail: userData.userEmail,
//       userPassword: userData.userPassword,
//     };

//     console.log('userRecord: ', userRecord);
//     setUserData(initialUserData);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <Text style={styles.labelText}>Login form:</Text>
//         <TextInput
//           style={styles.inputField}
//           onChangeText={changeText =>
//             setUserData(prevSate => {
//               return {...prevSate, userEmail: changeText};
//             })
//           }
//           value={userData.userEmail}
//           placeholder="User email"
//         />
//         <TextInput
//           style={styles.inputField}
//           onChangeText={changeText =>
//             setUserData(prevSate => {
//               return {...prevSate, userPassword: changeText};
//             })
//           }
//           value={userData.userPassword}
//           placeholder="User password"
//         />
//         <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//         <Button
//           title="Don't have login"
//           onPress={() => navigation.navigate('Register')}
//         />
//       </View>
//     </View>
//   );
// };

// export default LoginScreen;
