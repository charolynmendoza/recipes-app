import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { colors } from '../utils/theme';
import google from '../assets/img/google.png';
import fb from '../assets/img/fb.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    width: 88,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  text: {
    marginBottom: 20,
    color: colors.darkGray,
    fontFamily: fonts.medium,
    fontSize: 18,
    letterSpacing: 0.04,
    lineHeight: 22,
  },
  iconsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icons: {
    width: 30,

  }
})

export default function ProviderAuth() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>or</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            source={google}
            style={styles.icons}
            resizeMode='contain'
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={fb}
            style={styles.icons}
            resizeMode='contain'
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
