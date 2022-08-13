import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import Colors from "../../constants/Colors";
import { Icon } from "../../components/Icon";
import { globalStyle } from "../../constants/Styles";
import CustomText from "../../components/CustomText";

// Home stack screens
import Metrics from "../../constants/Metrics";
import HomeScreen from "../../screens/HomeScreen";
import CoursesScreen from "../../screens/CoursesScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import RouterOption from "../HeaderOptions/RouterOption";
import TapbarComponent from "../HeaderOptions/TapbarComponent";

const BottomTab = createBottomTabNavigator();
export default function BottomNavigator() {
  const TABWIDTH = Metrics.screenWidth / 3
  return (
    <BottomTab.Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Metrics.bottomTabsHeight,
          elevation: 0,
        }
      })}
    >
      {/* Home  */}
      <BottomTab.Screen
        name="Home"
        options={
          ({ navigation }) => RouterOption({
            navigation,
            title: 'Home',
            tabBarIcon: ({ focused }) =>
              <TapbarComponent
                title="Home"
                iconName="home"
                isFocused={focused}
                tabWidth={TABWIDTH}
              />
          })
        }
        component={HomeScreen}
      />

      {/* Profile  */}
      <BottomTab.Screen
        name="Profile"
        options={
          ({ navigation, route }) => RouterOption({
            navigation,
            title: 'Profile',
            tabBarIcon: ({ focused }) =>
              <TapbarComponent
                title="Profile"
                iconName="heart_outline"
                isFocused={focused}
                tabWidth={TABWIDTH}
              />
          })
        }
        component={ProfileScreen}
      />

      {/* Courses */}
      <BottomTab.Screen
        name="Courses"
        options={
          ({ navigation }) => RouterOption({
            navigation,
            title: 'Courses',
            tabBarIcon: ({ focused }) =>
              <TapbarComponent
                title="Courses"
                iconName="heart_outline"
                isFocused={focused}
                tabWidth={TABWIDTH}
              />
          })
        }
        component={CoursesScreen}
      />
    </BottomTab.Navigator>
  );
}

