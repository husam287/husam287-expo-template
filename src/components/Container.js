import { StyleSheet, View } from 'react-native';
import React from 'react';

const Container = (props) => {
  return (
    <View style={[styles.spaceBetween, { ...props.style }]}>
      {props.children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  spaceBetween: { paddingHorizontal: 15 },
});
