import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';
import i18n from 'assets/i18n';
import Metrics from 'constants/Metrics';
import HomeScreen from 'screens/main/Home';
import COLORS from 'constants/Colors';
import TapbarComponent from '../header-options/TapbarComponent';
import RouterOption from '../header-options/RouterOption';

const TABWIDTH = Metrics.screenWidth / 5;

function HomeTabBarElement({ focused }) {
  return (
    <TapbarComponent
      title={i18n.t('HOME')}
      iconComponent={
        <AntDesign name="home" size={24} color={COLORS.primary} />
      }
      isFocused={focused}
      tabWidth={TABWIDTH}
    />
  );
}

function CategoryTabBarElement({ focused }) {
  return (
    <TapbarComponent
      title={i18n.t('CATEGORIES')}
      iconComponent={
        <AntDesign name="home" size={24} color={COLORS.primary} />
      }
      isFocused={focused}
      tabWidth={TABWIDTH}
    />
  );
}

function OfferTabBarElement({ focused }) {
  return (
    <TapbarComponent
      title={i18n.t('OFFERS')}
      iconComponent={
        <AntDesign name="home" size={24} color={COLORS.primary} />
      }
      isFocused={focused}
      tabWidth={TABWIDTH}
    />
  );
}

function CartTabBarElement({ focused }) {
  return (
    <TapbarComponent
      title={i18n.t('CART')}
      iconComponent={
        <AntDesign name="home" size={24} color={COLORS.primary} />
      }
      isFocused={focused}
      tabWidth={TABWIDTH}
    />
  );
}

function ProfileTabBarElement({ focused }) {
  return (
    <TapbarComponent
      title={i18n.t('PROFILE')}
      iconComponent={
        <AntDesign name="home" size={24} color={COLORS.primary} />
      }
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
        name="HomeScreen"
        options={({ navigation }) => RouterOption({
          navigation,
          tabBarIcon: HomeTabBarElement,
        })}
        component={HomeScreen}
      />

      {/* Categories */}
      <BottomTab.Screen
        name="CategoryScreen"
        options={({ navigation }) => RouterOption({
          navigation,
          tabBarIcon: CategoryTabBarElement,
        })}
        component={HomeScreen}
      />

      {/* Offers */}
      <BottomTab.Screen
        name="MainOffersScreen"
        options={({ navigation }) => RouterOption({
          navigation,
          tabBarIcon: OfferTabBarElement,
        })}
        component={HomeScreen}
      />

      {/* Cart */}
      <BottomTab.Screen
        name="CartScreen"
        options={({ navigation }) => RouterOption({
          navigation,
          tabBarIcon: CartTabBarElement,
        })}
        component={HomeScreen}
      />

      {/* Profile  */}
      <BottomTab.Screen
        name="ProfileScreen"
        options={({ navigation }) => RouterOption({
          navigation,
          tabBarIcon: ProfileTabBarElement,
        })}
        component={HomeScreen}
      />
    </BottomTab.Navigator>
  );
}
