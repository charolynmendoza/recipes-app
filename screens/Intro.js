import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Share } from 'react-native';
import { colors, fonts } from '../utils/theme';
import Dots from '../components/Dots';
import discover from '../assets/img/discover.png';
import share from '../assets/img/share.png';
import create from '../assets/img/create.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    padding: 43,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  image: {
    width: 300,
    marginBottom: 80,
  },
  subtitle: {
    marginBottom: 35,
    color: colors.black,
    fontFamily: fonts.bold,
    fontSize: 30,
    lineHeight: 36,
    textAlign: 'center',
    letterSpacing: 0.04,
  },
  description: {
    marginBottom: 55,
    color: colors.darkGray,
    fontFamily: fonts.medium,
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'center',
    letterSpacing: 0.04,
  },
  linkContainer: {
    alignSelf: 'flex-end',
  },
  linkText: {
    color: colors.black,
    fontFamily: fonts.medium,
    fontSize: 18,
    lineHeight: 22,
    textAlign: 'right',
    textDecorationLine: 'underline',
    letterSpacing: 0.04,
    alignSelf: 'flex-end'
  }
})

export default function Intro({ navigation }) {
  const [activeScreen, setActiveScreen] = useState(0);

  const introDetails = [
    {
      id: 0,
      image: discover,
      title: 'discover',
      description: 'find new recipes from all kinds of different cuisines',
    },
    {
      id: 1,
      image: share,
      title: 'share',
      description: 'share your favorite recipes with other foodies',
    },
    {
      id: 2,
      image: create,
      title: 'create',
      description: 'create your own collection of recipes you love',
    }
  ]

  return (
    <View style={styles.container}>
      <Image
        resizeMode='contain'
        source={introDetails[activeScreen].image}
        style={styles.image}
      />
      <Text
        style={styles.subtitle}
      >
        {introDetails[activeScreen].title}
      </Text>
      <Text
        style={styles.description}
      >
        {introDetails[activeScreen].description}
      </Text>
      <Dots
        activeIndex={activeScreen}
        onPress={(index) => {
          setActiveScreen(index)
        }}
      />
      <View style={styles.linkContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
          {activeScreen === 2 ?
            <Text style={styles.linkText}>log in / sign up</Text>
            :
            <Text style={styles.linkText}>skip</Text>
          }
        </TouchableOpacity>
      </View>
    </View>
  )
}
