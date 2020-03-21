import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import AuthButton from "./AuthButton";

const SignInSignUp = ({ children }) => {
  return (
    <View style={{ flex: 1, marginTop: 30, paddingHorizontal: 20 }}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: 27,
            fontFamily: "quicksand-Bold",
            textAlign: "center",
            paddingVertical: 10
          }}
        >
          welcome Back
        </Text>
      </View>
      <View
        style={{
          flex: 0.6,
          flexDirection: "row",
          paddingHorizontal: 20,
          justifyContent: "space-between"
        }}
      >
        <AuthButton textColor="#fff" logoColor="#fff" logo="facebook-f" />
        <AuthButton logo="google" bgColor="#fff" />
      </View>

      <Text
        style={{
          fontSize: 27,
          fontFamily: "quicksand-Bold",
          textAlign: "center",
          paddingVertical: 10
        }}
      >
        or
      </Text>

      <View style={{ flex: 5 }}>{children}</View>
    </View>
  );
};

export default SignInSignUp;
