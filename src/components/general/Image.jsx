import {
  Image, StyleSheet, View,
} from 'react-native';
import React, { useState } from 'react';
import LoadingComponent from './LoadingComponent';

const styles = StyleSheet.create({
  loadingFullContainer: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
  },
});

function Img({
  source,
  style,
  containerStyle,
  ...otherProps
}) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <View style={containerStyle}>
      <Image
        source={source}
        style={style}
        onLoadStart={() => { setIsLoading(true); }}
        onLoadEnd={() => { setIsLoading(false); }}
        {...otherProps}
      />
      {isLoading && (
        <View style={[styles.loadingFullContainer, style]}>
          <LoadingComponent />
        </View>
      )}
    </View>
  );
}

export default Img;
