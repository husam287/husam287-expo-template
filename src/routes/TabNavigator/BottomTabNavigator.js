import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Metrics from 'constants/Metrics';
import HomeScreen from 'screens/HomeScreen';
import CoursesScreen from 'screens/CoursesScreen';
import ProfileScreen from 'screens/ProfileScreen';
import RouterOption from '../HeaderOptions/RouterOption';
import TapbarComponent from '../HeaderOptions/TapbarComponent';

const TABWIDTH = Metrics.screenWidth / 3;

const HomeTabBarElement = ({ focused }) => (
  <TapbarComponent
    title={'Home'}
    iconName={'home'}
    isFocused={focused}
    tabWidth={TABWIDTH}
  />
);

const ProfileTabBarElement = ({ focused }) => (
  <TapbarComponent
    title={'Profile'}
    iconName={'user'}
    isFocused={focused}
    tabWidth={TABWIDTH}
  />
);

const CoursesTabBarElement = ({ focused }) => (
  <TapbarComponent
    title={'Courses'}
    iconName={'heart_outline'}
    isFocused={focused}
    tabWidth={TABWIDTH}
  />
);

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
        options={({ navigation }) =>
          RouterOption({
            navigation,
            title: 'Home',
            tabBarIcon: HomeTabBarElement,
          })
        }
        component={HomeScreen}
      />

      {/* Profile  */}
      <BottomTab.Screen
        name="Profile"
        options={({ navigation, route }) =>
          RouterOption({
            navigation,
            title: 'Profile',
            tabBarIcon: ProfileTabBarElement,
          })
        }
        component={ProfileScreen}
      />

      {/* Courses */}
      <BottomTab.Screen
        name="Courses"
        options={({ navigation }) =>
          RouterOption({
            navigation,
            title: 'Courses',
            tabBarIcon: CoursesTabBarElement,
          })
        }
        component={CoursesScreen}
      />
    </BottomTab.Navigator>
  );
}
