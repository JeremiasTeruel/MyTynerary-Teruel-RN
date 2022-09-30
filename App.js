import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import Drawer from './src/navigation/Drawer';
import store from './src/features/Store'
import { Provider} from 'react-redux';

export default function App() {

  return (
      <Provider store={store}>
        <NavigationContainer>
          <Drawer/>
        </NavigationContainer>
      </Provider>
  );
}


