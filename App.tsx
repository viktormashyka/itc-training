import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import DetailsScreen from './screens/DetailsScreen/DetailsScreen';
import FlexTestScreen from './screens/FlexTestScreen/FlexTestScreen';
import MyListScreen from './screens/MyListScreen/MyListScreen';
import ProfileDetailsScreen from './screens/ProfileDetailsScreen/ProfileDetailsScreen';
import ListItemScreen from './screens/ListItemScreen/ListItemScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
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
          name="ProfileDetails"
          component={ProfileDetailsScreen}
          options={{title: 'ProfileDetails'}}
        />
        <Stack.Screen
          name="FlexTest"
          component={FlexTestScreen}
          options={{title: 'FlexTest'}}
        />
        <Stack.Screen
          name="MyList"
          component={MyListScreen}
          options={{title: 'MyList'}}
        />
        <Stack.Screen
          name="ListItem"
          component={ListItemScreen}
          options={{title: 'ListItem'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
