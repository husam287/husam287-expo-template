import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomNavigator from 'routes/tab-navigator/BottomTabNavigator';
import TestScreen from 'screens/TestScreen';
import RouterOption from '../header-options/RouterOption';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      {/* MAIN SCREENS */}
      <Stack.Group>
        <Stack.Screen
          name="HomeStack"
          component={BottomNavigator}
          options={({ navigation }) => RouterOption({ navigation })}
        />

        <Stack.Screen
          name="testScreen"
          component={TestScreen}
          options={({ navigation }) => RouterOption({ navigation, title: 'Test screen' })}
        />
      </Stack.Group>

      {/* AUTH SCREENS */}
      <Stack.Group />
    </Stack.Navigator>
  );
}
