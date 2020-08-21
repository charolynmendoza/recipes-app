import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const style = StyleSheet.create({
  container: {
    width: 75,
    height: 75,
    borderRadius: 50,
    position: 'absolute',
    right: 50,
    top: -40,
    backgroundColor: colors.accent,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  TouchableOpacity: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
  arrow: {
    color: 'white',
    fontSize: 32,
  }
})

export default function ArrowButton(props) {
  return (
    <View style={style.container}>
      <TouchableOpacity style={style.TouchableOpacity} onPress={props.onPress}>
        <Text style={style.arrow}>→</Text>
      </TouchableOpacity>
    </View>
  )
}
