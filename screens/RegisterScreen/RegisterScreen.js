import React from 'react';
import {View, TextInput, StyleSheet, Button, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  confirmPassword: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const RegisterScreen = ({navigation}) => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const handleSubmit = (values, {resetForm}) => {
    console.log(values);
    const newUserRecord = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    console.log('newUserRecord: ', newUserRecord);

    navigation.navigate('Login');
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RegisterSchema}
      onSubmit={handleSubmit}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
          />
          {touched.name && errors.name && (
            <Text style={styles.error}>{errors.name}</Text>
          )}
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
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            onChangeText={handleChange('confirmPassword')}
            onBlur={handleBlur('confirmPassword')}
            value={values.confirmPassword}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <Text style={styles.error}>{errors.confirmPassword}</Text>
          )}
          <Button title="Submit" onPress={handleSubmit} />
          <Button
            title="Do you have login?"
            onPress={() => navigation.navigate('Login')}
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

export default RegisterScreen;

// import React, {useState} from 'react';
// import {Text, TextInput, TouchableOpacity, View, Button} from 'react-native';
// import styles from './RegisterScreenStyles';

// const initialUserData = {userName: '', userEmail: '', userPassword: ''};

// const RegisterScreen = ({navigation}) => {
//   const [userData, setUserData] = useState(initialUserData);

//   const handleSubmit = () => {
//     if (!userData.userEmail || !userData.userEmail) {
//       return;
//     }
//     const newUserRecord = {
//       userName: userData.userName,
//       userEmail: userData.userEmail,
//       userPassword: userData.userPassword,
//     };
//     console.log('newUserRecord: ', newUserRecord);
//     navigation.navigate('Login');
//     setUserData(initialUserData);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.inputContainer}>
//         <Text style={styles.labelText}>Register form:</Text>
//         <TextInput
//           style={styles.inputField}
//           onChangeText={changeText =>
//             setUserData(prevSate => {
//               return {...prevSate, userName: changeText};
//             })
//           }
//           value={userData.userName}
//           placeholder="User name"
//         />
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
//         <TouchableOpacity
//           activeOpacity={0.3}
//           style={styles.button}
//           onPress={handleSubmit}>
//           <Text style={styles.buttonText}>Register</Text>
//         </TouchableOpacity>
//         <Button
//           title="Have you login?"
//           onPress={() => navigation.navigate('Login')}
//         />
//       </View>
//     </View>
//   );
// };

// export default RegisterScreen;
