import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Wellcome from './app/components/Wellcome';
import Home from './app/components/Home';
import Store from './app/ext/Store';

const Stack = createStackNavigator();

function App() {
  return (
    <Store>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Wellcome">
          <Stack.Screen name="Wellcome" component={Wellcome} options={{ headerShown: false }} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Store>
  );
}

export default App;