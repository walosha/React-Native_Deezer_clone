import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SignInSignUp from "../components/SignIn-SignUp";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const SignInScreen = () => {
  return (
    <SignInSignUp>
      <FormInput label="Email" onChange={() => {}} />
      <FormInput label="Password" hideInput onChange={() => {}} />
      <View
        style={{
          flex: 1,
          paddingHorizontal: 35
        }}
      >
        <Button inverted buttonText="LOG IN" />
        <TouchableOpacity
          style={{
            flex: 4,
            paddingHorizontal: 35
          }}
        >
          <Text> forget your password ?</Text>
        </TouchableOpacity>
      </View>
    </SignInSignUp>
  );
};

export default SignInScreen;
