import React from 'react';
import HeaderComponent from './HeaderComponent';

export default function RouterOption({
  navigation,
  title,
  tabBarIcon,
  hasBackArrow = true,
  isRightComponentHidden = false,
} = {}) {
  return {
    title,
    header: () => (
      <HeaderComponent
        title={title}
        navigation={navigation}
        hasBackArrow={hasBackArrow}
        isRightComponentHidden={isRightComponentHidden}
      />
    ),
    tabBarIcon,
    headerShown: Boolean(title),
  };
}
