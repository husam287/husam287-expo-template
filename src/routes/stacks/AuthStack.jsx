import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from 'screens/auth/Login';
import WelcomeScreen from 'screens/auth/Welcome';
import RouterOption from '../header-options/RouterOption';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={({ navigation }) => RouterOption({
            navigation,
            isRightComponentHidden: true,
          })}
        />

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={({ navigation }) => RouterOption({
            navigation,
            isRightComponentHidden: true,
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
