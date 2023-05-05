import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ErrorBoundary} from 'react-error-boundary';
import Navigation from './navigate';
import {Text, View} from 'react-native';

function App() {
  return (
    <NavigationContainer>
      <ErrorBoundary
        fallback={
          <View>
            <Text>Something went wrong!!!</Text>
          </View>
        }>
        <Navigation navigation={undefined} />
      </ErrorBoundary>
    </NavigationContainer>
  );
}

export default App;
