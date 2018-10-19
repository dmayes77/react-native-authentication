import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

export function InputField({ 
  label, value, onChangeText, placeholder, secureTextEntry, autoCapitalize 
}) {
  const { inputStyle, labelStyle, container } = styles;
  return (
    <View style={container}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={inputStyle}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  container: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
});
