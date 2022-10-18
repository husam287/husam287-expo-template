import React from 'react';
import HeaderComponent from './HeaderComponent';

export default function RouterOption({ navigation, title, tabBarIcon }) {
  return {
    title: title,
    header: () => (
      <HeaderComponent
        title={title}
        navigation={navigation}
        hasBackArrow={navigation?.canGoBack && !tabBarIcon}
      />
    ),
    tabBarIcon: tabBarIcon,
    headerShown: Boolean(title),
  };
}
