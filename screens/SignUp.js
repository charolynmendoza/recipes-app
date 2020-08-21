import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CheckBox from '@react-native-community/checkbox';
import WhiteContainer from '../components/WhiteContainer';
import InputField from '../components/InputField';
import ProviderAuth from '../components/ProviderAuth';
import LargeButton from '../components/LargeButton';
import { colors, fonts } from '../utils/theme';
import pattern from '../assets/img/pattern.png';

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
  termsContainer: {
    width: '100%',
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBox: {
    width: 20,
    height: 20,
    marginRight: 18,
  },
  termsText: {
    color: colors.darkGray,
    fontFamily: fonts.medium,
    fontSize: 18,
    letterSpacing: 0.04,
    lineHeight: 22,
  }
})

export default function SignUp({ navigation }) {
  const [isSelected, setSelection] = useState(false);

  const validationSchema = Yup.object({
    username: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Required'),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters or more')
      .required('Required'),
  })

  return (

    <Formik
      initialValues={{
        username: '',
        email: '',
        password: '',
      }}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (

        <View style={styles.container}>
          <ImageBackground
            source={pattern}
            style={styles.pattern}
          >
            <WhiteContainer style={{ height: 684 }}>
              <Text style={styles.subtitle}>join us</Text>
              <InputField
                placeholderText='username'
                onChangeText={handleChange('username')}
                value={values.username}
              />
              <InputField
                placeholderText='email address'
                onChangeText={handleChange('email')}
                value={values.email}
              />
              <InputField
                placeholderText='password'
                onChangeText={handleChange('password')}
                value={values.password}
              />
              <InputField
                placeholderText='confirm password'
              // onSubmit={formik.handleSubmit}
              // onChange={formik.handleChange}
              // value={formik.values.password}
              />
              <ProviderAuth />
              <View style={styles.termsContainer}>
                <CheckBox
                  style={styles.checkBox}
                  tintColor={colors.primary}
                  onTintColor={colors.accent}
                  onCheckColor={colors.accent}
                  value={isSelected}
                  onValueChange={() => {
                    setSelection(true)
                    console.log(isSelected)
                  }}
                />
                <Text style={styles.termsText}>accept</Text>
                <TouchableOpacity>
                  <Text style={[styles.termsText, { marginLeft: 5, color: colors.accent, textDecorationLine: 'underline' }]}>terms and conditions</Text>
                </TouchableOpacity>
              </View>
              <LargeButton onPress={handleSubmit}>sign up</LargeButton>
            </WhiteContainer>
          </ImageBackground>
        </View>
      )}
    </Formik>
  )
}
