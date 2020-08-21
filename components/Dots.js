import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../utils/theme';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    width: 111,
    marginBottom: 70,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.lightGray,
  },
  activeDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.primary,
  }
})

export default function Dots(props) {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={props.activeIndex === 0 ? styles.activeDot : styles.dot}
        onPress={() => props.onPress(0)}
      />
      <TouchableOpacity
        style={props.activeIndex === 1 ? styles.activeDot : styles.dot}
        onPress={() => props.onPress(1)}
      />
      <TouchableOpacity
        style={props.activeIndex === 2 ? styles.activeDot : styles.dot}
        onPress={() => props.onPress(2)}
      />
    </View>
  )
}
