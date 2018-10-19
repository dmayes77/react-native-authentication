import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

export function Spinner({ spinnerSize }) {
  return (
    <View style={styles.spinnerStyle} >
      <ActivityIndicator spinnerSize={spinnerSize || 'large'} />
    </View>
  );
}

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
