import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { store } from './src/store';
import MainScreen from './src/screens/MainScreen';
import PhotoFullScreen from './src/components/PhotoFullScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Gallery">
          <Stack.Screen name="Gallery" component={MainScreen} />
          <Stack.Screen name="Photo" component={PhotoFullScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
