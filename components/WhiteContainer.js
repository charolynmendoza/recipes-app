import React from 'react';
import { View, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  container: {
    width: '100%',
    height: 187,
    padding: 47,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -5 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
    elevation: 1,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
})

export default function WhiteContainer(props) {
  return (
    <View style={[style.container, props.style]}>
      {props.children}
    </View>
  )
}
