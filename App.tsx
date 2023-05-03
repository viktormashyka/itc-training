import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Navigation from './navigate';

function App() {
  return (
    <NavigationContainer>
      <Navigation navigation={undefined} />
    </NavigationContainer>
  );
}

export default App;
