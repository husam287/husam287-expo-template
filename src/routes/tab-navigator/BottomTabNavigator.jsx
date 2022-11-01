import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Metrics from 'constants/Metrics';
import HomeScreen from 'screens/HomeScreen';
import CoursesScreen from 'screens/CoursesScreen';
import ProfileScreen from 'screens/ProfileScreen';
import RouterOption from '../header-options/RouterOption';
import TapbarComponent from '../header-options/TapbarComponent';

const TABWIDTH = Metrics.screenWidth / 3;

function HomeTabBarElement({ focused }) {
  return (
    <TapbarComponent
      title="Home"
      iconName="home"
      isFocused={focused}
      tabWidth={TABWIDTH}
    />
  );
}

function ProfileTabBarElement({ focused }) {
  return (
    <TapbarComponent
      title="Profile"
      iconName="user"
      isFocused={focused}
      tabWidth={TABWIDTH}
    />
  );
}

function CoursesTabBarElement({ focused }) {
  return (
    <TapbarComponent
      title="Courses"
      iconName="heart_outline"
      isFocused={focused}
      tabWidth={TABWIDTH}
    />
  );
}

const BottomTab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Metrics.bottomTabsHeight,
          elevation: 0,
        },
      })}
    >
      {/* Home  */}
      <BottomTab.Screen
        name="Home"
        options={({ navigation }) => RouterOption({
          navigation,
          title: 'Home',
          tabBarIcon: HomeTabBarElement,
        })}
        component={HomeScreen}
      />

      {/* Profile  */}
      <BottomTab.Screen
        name="Profile"
        options={({ navigation }) => RouterOption({
          navigation,
          title: 'Profile',
          tabBarIcon: ProfileTabBarElement,
        })}
        component={ProfileScreen}
      />

      {/* Courses */}
      <BottomTab.Screen
        name="Courses"
        options={({ navigation }) => RouterOption({
          navigation,
          title: 'Courses',
          tabBarIcon: CoursesTabBarElement,
        })}
        component={CoursesScreen}
      />
    </BottomTab.Navigator>
  );
}
