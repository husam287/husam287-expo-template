import { ScrollView } from 'react-native';
import React from 'react';

export default function ScrollViewWithoutBar({ children, ...otherProps }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false} {...otherProps}>
      {children}
    </ScrollView>
  );
}
