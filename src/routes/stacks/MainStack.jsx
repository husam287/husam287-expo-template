import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import RouterOption from 'routes/header-options/RouterOption';
import BottomNavigator from 'routes/tab-navigator/BottomTabNavigator';
import NotificationScreen from 'screens/main/Notification';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Root"
          component={BottomNavigator}
          options={({ navigation }) => RouterOption({
            navigation,
            isRightComponentHidden: true,
          })}
        />

        <Stack.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={({ navigation }) => RouterOption({
            navigation,
            title: 'Notification',
            isRightComponentHidden: true,
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
