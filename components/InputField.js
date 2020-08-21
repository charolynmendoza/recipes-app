import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { colors, fonts } from '../utils/theme';

const styles = StyleSheet.create({
  container: {

  },
  input: {
    width: 300,
    height: 56.5,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    fontFamily: fonts.medium,
    fontSize: 18,
    letterSpacing: 0.04,
    lineHeight: 22,
  }
})

export default function InputField(props) {
  return (
    <View>
      <TextInput
        placeholder={props.placeholderText}
        placeholderTextColor={colors.darkGray}
        style={styles.input}
      />
    </View>
  )
}
