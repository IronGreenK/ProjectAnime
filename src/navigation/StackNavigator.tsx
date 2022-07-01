import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Details from '../screens/Details';
import Favorites from '../screens/Favorites';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Home"
        component={Home}
      />
    <Stack.Screen name="Details" component={Details} />
    <Stack.Screen name="Favorites" component={Favorites} />
    <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
    />

    </Stack.Navigator>
  );
}
