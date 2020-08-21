import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import WhiteContainer from '../components/WhiteContainer';
import InputField from '../components/InputField';
import ProviderAuth from '../components/ProviderAuth';
import LargeButton from '../components/LargeButton';
import { colors, fonts } from '../utils/theme';
import pattern from '../assets/img/pattern.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  pattern: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  subtitle: {
    color: colors.black,
    fontFamily: fonts.semiBold,
    fontSize: 30,
    lineHeight: 36,
    letterSpacing: 0.04,
    alignSelf: 'flex-start',
  },
  signUpLinkContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    color: colors.darkGray,
    fontFamily: fonts.medium,
    fontSize: 18,
    letterSpacing: 0.04,
    lineHeight: 22,
  }
})

export default function LogIn({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={pattern}
        style={styles.pattern}
      >
        <WhiteContainer style={{ height: 536 }}>
          <Text style={styles.subtitle}>sign in</Text>
          <InputField placeholderText='username or email' />
          <InputField placeholderText='password' />
          <ProviderAuth />
          <LargeButton>continue</LargeButton>
          <View style={styles.signUpLinkContainer}>
            <Text style={styles.linkText}>new user?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={[styles.linkText, { marginLeft: 10, color: colors.accent, textDecorationLine: 'underline' }]}>sign up</Text>
            </TouchableOpacity>
          </View>
        </WhiteContainer>
      </ImageBackground>
    </View>
  )
}
