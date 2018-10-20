import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export function Button({ onPress, children }) {
  const { buttonStyle, textStyle, btnContainer } = styles;
  
  return (
    <View style={btnContainer}>
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>
          {children}
        </Text>
    </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#007aff',
    borderRadius: 5,
    marginTop: 5,    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  btnContainer: {
    flexDirection: 'row',
  }
});
