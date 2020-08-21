import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import WhiteContainer from '../components/WhiteContainer';
import ArrowButton from '../components/ArrowButton';
import { colors, fonts } from '../utils/theme';
import pattern from '../assets/img/pattern.png';


const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  pattern: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  title: {
    color: colors.black,
    textAlign: 'center',
    fontFamily: fonts.bold,
    fontSize: 45,
    lineHeight: 54,
    letterSpacing: 2,
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textShadowColor: '#FFC7CE',
  },
  subtitle: {
    color: colors.black,
    fontFamily: fonts.semiBold,
    fontSize: 30,
    lineHeight: 36,
    letterSpacing: 0.04,
    alignSelf: 'flex-start',
  },
  description: {
    color: colors.darkGray,
    fontFamily: fonts.regular,
    fontSize: 24,
    letterSpacing: 0.04,
    alignSelf: 'flex-start',
  },
  TouchableOpacity: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end'
  },
})

export default function Welcome({ navigation }) {
  return (
    <View style={style.container}>
      <ImageBackground style={style.pattern} source={pattern}>
        <Text style={style.title}>recipes</Text>
        <WhiteContainer>
          <ArrowButton onPress={() => navigation.navigate('Intro')} />
          <Text style={style.subtitle}>welcome!</Text>
          <Text style={style.description}>
            Click the button to get started
          </Text>
        </WhiteContainer>
      </ImageBackground>

    </View >
  )
}
