import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AuthScreens } from "../AuthRoutes/AuthScreens";
import RouterOption from "../HeaderOptions/RouterOption";
import { MainScreens } from "../MainRoutes/MainScreens";

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      {/* MAIN SCREENS */}
      <Stack.Group>
        {Object.entries(MainScreens).map(
          ([name, { component, title, isModal }]) => {
            return (
              <Stack.Screen
                key={`screen_${name}`}
                name={name}
                component={component}
                options={({ navigation }) => RouterOption({ navigation, title })}
              />
            );
          }
        )}
      </Stack.Group>

      {/* AUTH SCREENS */}
      <Stack.Group>
        {Object.entries(AuthScreens).map(
          ([name, { component, header, title }]) => {
            return (
              <Stack.Screen
                key={`screen_${name}`}
                name={name}
                component={component}
                options={({ navigation }) => RouterOption({ navigation, title })}
              />
            );
          }
        )}
      </Stack.Group>
    </Stack.Navigator>
  );
}