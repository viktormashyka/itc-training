import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen/DetailsScreen';
import FlexTestScreen from '../screens/FlexTestScreen/FlexTestScreen';
import MyListScreen from '../screens/MyListScreen/MyListScreen';
import ProfileDetailsScreen from '../screens/ProfileDetailsScreen/ProfileDetailsScreen';
import ListItemScreen from '../screens/ListItemScreen/ListItemScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const isUserLoggedIn = true;

const Navigation = () => {
  const getHomeStack = () => {
    return (
      <Stack.Group>
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
        /> */}
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
        {/* <Stack.Screen
          name="Flex test"
          component={FlexTestScreen}
          options={{title: 'Flex test'}}
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
        /> */}
      </Stack.Group>
    );
  };

  const getAuthStack = () => {
    return (
      <Stack.Group>
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home'}}
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
        /> */}
        {/* <Stack.Screen
          name="Flex test"
          component={FlexTestScreen}
          options={{title: 'Flex test'}}
        /> */}
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
      </Stack.Group>
    );
  };

  const renderModal = () => {};

  const renderFlatList = () => {};

  const getTabNavigator = () => {
    return (
      <Tab.Navigator>
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
      </Tab.Navigator>
    );
  };

  //   return (
  //     <Stack.Navigator>
  //       {isUserLoggedIn ? getAuthStack() : getHomeStack()}
  //     </Stack.Navigator>
  //   );

  return getTabNavigator();
};

export default Navigation;
