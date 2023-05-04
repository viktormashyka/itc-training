import React, {useEffect, useState} from 'react';
import {Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
import FlexTestScreen from '../screens/FlexTestScreen/FlexTestScreen';
import MyListScreen from '../screens/MyListScreen/MyListScreen';
import ProfileDetailsScreen from '../screens/ProfileDetailsScreen/ProfileDetailsScreen';
import ListItemScreen from '../screens/ListItemScreen/ListItemScreen';
import {ImagesScreen} from '../screens';
import {UserScreen} from '../screens';
import {LoginScreen} from '../screens';
import {RegisterScreen} from '../screens';
import {PracticeContextScreen} from '../screens';

import {EventRegister} from 'react-native-event-listeners';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const isUserLoggedIn = true;

const Navigation = ({navigation}) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(true);

  useEffect(() => {
    const listener = EventRegister.addEventListener('myCustomEvent', data => {
      //   setIsUserLoggedIn(false)
      //   this.setState({
      //     data,
      //   });

      console.log('data: ', data);
      setIsUserLoggedIn(data);
    });
  }, []);

  const getHomeStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {backgroundColor: '#f4511e'},
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'Georgia',
              fontSize: 16,
            },
            headerRight: () => (
              <Button
                onPress={() => {
                  setIsUserLoggedIn(false);
                  EventRegister.emit(
                    'myCustomEvent',
                    'it is Check Out button!',
                  );
                }}
                title="Log out"
                color="#fff"
              />
            ),
          }}
        />
        <Stack.Screen
          name="Flex test"
          component={FlexTestScreen}
          options={{tabBarLabel: 'Flex test'}}
        />
        <Stack.Screen
          name="Images screen"
          component={ImagesScreen}
          options={{title: 'Images'}}
        />
        <Stack.Screen
          name="My list"
          component={MyListScreen}
          options={{title: 'My list'}}
        />
        <Stack.Screen
          name="List item"
          component={ListItemScreen}
          options={{title: 'User data'}}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{title: 'User'}}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{title: 'Details'}}
        />
        <Stack.Screen
          name="Profile details"
          component={ProfileDetailsScreen}
          options={{title: 'Profile details'}}
        />
        <Stack.Screen
          name="Practice context"
          component={PracticeContextScreen}
          options={{title: 'Practice context'}}
        />
      </Stack.Group>
    );
  };

  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login', headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{title: 'Register', headerShown: false}}
        />
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {backgroundColor: '#f4511e'},
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontFamily: 'Georgia',
              fontSize: 16,
            },
            headerRight: () => (
              <Button
                onPress={() => {
                  navigation.navigate('Login');
                }}
                title="Log out"
                color="#fff"
              />
            ),
          }}
        /> */}
      </Stack.Group>
    );
  };

  // const getTabNavigator = () => {
  //   return (
  //     <Tab.Navigator>
  //       <Tab.Screen
  //         name="Flex test"
  //         component={FlexTestScreen}
  //         options={{tabBarLabel: 'Flex test'}}
  //       />
  //       <Tab.Screen
  //         name="Home"
  //         component={HomeScreen}
  //         options={{title: 'Home'}}
  //       />
  //       <Tab.Screen
  //         name="My list"
  //         component={MyListScreen}
  //         options={{title: 'My list'}}
  //       />
  //       <Tab.Screen
  //         name="List item"
  //         component={ListItemScreen}
  //         options={{title: 'User data'}}
  //       />
  //     </Tab.Navigator>
  //   );
  // };

  const getHomeTab = () => {
    return (
      <Tab.Group>
        <Tab.Screen
          name="Flex test"
          component={FlexTestScreen}
          options={{tabBarLabel: 'Flex test'}}
        />
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        />
        <Tab.Screen
          name="My list"
          component={MyListScreen}
          options={{title: 'My list'}}
        />
        <Tab.Screen
          name="List item"
          component={ListItemScreen}
          options={{title: 'User data'}}
        />
      </Tab.Group>
    );
  };
  let initialRouteName = '';
  if (isUserLoggedIn) {
    initialRouteName = 'Home';
  } else {
    initialRouteName = 'Login';
  }
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      {isUserLoggedIn ? getHomeStack() : getAuthStack()}
    </Stack.Navigator>
  );

  // return getTabNavigator();
};

// <Stack.Navigator initialRouteName={initialRouteName}>
//   {isUserLoggedIn ? getAuthStack() : getHomeStack()}
// </Stack.Navigator>

export default Navigation;

// <>
//   {isUserLoggedIn ? (
//     <Stack.Navigator initialRouteName="Login">
//       {getAuthStack()}
//     </Stack.Navigator>
//   ) : (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={({route}) => ({
//         tabBarIcon: ({focused, color, size}) => {
//           let iconName;
//           if (route.name === 'Posts') {
//             iconName = focused ? 'grid' : 'grid-outline';
//           } else if (route.name === 'CreatePosts') {
//             iconName = focused ? 'add-circle' : 'add-circle-outline';
//           } else if (route.name === 'Profile') {
//             iconName = focused ? 'person' : 'person-outline';
//           }
//           return <Icon name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: 'tomato',
//         tabBarInactiveTintColor: 'grey',
//       })}>
//       {getHomeTab()}
//     </Tab.Navigator>
//   )}
// </>;
