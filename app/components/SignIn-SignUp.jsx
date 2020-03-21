import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import AuthButton from "./AuthButton";

const SignInSignUp = () => {
  return (
    <SafeAreaView force>
      <View>
        <Text>Hello Sign Up</Text>
        <View>
          <AuthButton />
          <AuthButton />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInSignUp;
