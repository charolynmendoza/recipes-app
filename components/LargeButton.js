import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../utils/theme';

const styles = StyleSheet.create({
  container: {
    width: 283,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.accent,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: fonts.semiBold,
    fontSize: 18,
    letterSpacing: 0.04,
    lineHeight: 22,
  }
})

export default function LargeButton(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => props.onPress}>
        <Text style={styles.text}>
          {props.children}
        </Text>
      </TouchableOpacity>
    </View>
  )
}
