import React from 'react';
import {StyleSheet, View} from 'react-native';
import IconButton from '../../components/IconButton';
import RulerText from '../../components/RulerText';
import InputField from '../../components/InputField';
import {ScrollView} from 'react-native-gesture-handler';
import ActionButton from '../../components/actionButton/ActionButton';
import AuthHeaderSection from '../../components/AuthSectionHeader';
import Images from '../../constants/imgs';
import {COLOR} from '../../constants/colors';
import Loader from '../../components/loader/Loader';
import useAuthFunctionality from '../../hooks/useAuthFunctionality';

const SignIn: React.FC = () => {
  const {userData, handleSignUpInputChange, signUpHandler, loading, error, setError} =
    useAuthFunctionality();
    
  return (
    <>
      {loading && <Loader />}
      <ScrollView
        showsVerticalScrollIndicator={true}
        style={styles.scrollView}>
        <AuthHeaderSection
          title="Sign up with Email"
          subText="Get chatting with friends and family today by signing up for our chat app!"
          styleSubTitle={styles.subTitle}
        />

        <View style={styles.formContainer}>
          <IconButton
            src={Images.GoogleIcon}
            onPress={() => c("Google Icon clicked")}
          />
          <View style={styles.gapVertical}>
            <RulerText lineColor={COLOR.dark_gray} />
          </View>

          <View style={styles.inputFieldsContainer}>
            <InputField
              val={userData.name}
              setVal={value => handleSignUpInputChange('name', value)}
              title="Enter Name"
              type="default"
              placeholder="John Doe"
              setError={setError}
            />
            <InputField
              val={userData.email}
              setVal={value => handleSignUpInputChange('email', value)}
              title="Enter Email"
              type="email-address"
              placeholder="i.e. john@gmail.com"
              setError={setError}
            />

            <InputField
              val={userData.password}
              setVal={value => handleSignUpInputChange('password', value)}
              placeholder="Enter your password"
              title="Password"
              type="default"
              secureTextEntry={true}
              setError={setError}
            />

            <InputField
              val={userData.confirmPassword}
              setVal={value => handleSignUpInputChange('confirmPassword', value)}
              title="Confirm Password"
              type="default"
              secureTextEntry={true}
              placeholder="Confirm your password"
              setError={setError}
            />
          </View>
        </View>

        <View style={styles.actionButtonContainer}>
          <ActionButton
            onClick={signUpHandler}
            loader={loading}
            error={error}
            onLoadText="Registering..."
          >
            Register Me
          </ActionButton>
        </View>
      </ScrollView>
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 20,
    paddingVertical: 60,
    columnGap: 40,
  },
  subTitle: {
    width: '80%',
  },
  formContainer: {
    flex: 6,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  gapVertical: {
    marginTop: 10,
  },
  inputFieldsContainer: {
    gap: 25,
  },
  actionButtonContainer: {
    flex: 2,
    marginTop: 20,
    paddingVertical: 10,
  },
});
