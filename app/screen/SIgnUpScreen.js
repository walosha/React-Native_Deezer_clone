import React, { useState } from "react";
import { View, Text, TouchableOpacity, Picker, TextInput } from "react-native";
import SignInSignUp from "../components/SignIn-SignUp";
import FormInput from "../components/FormInput";
import Button from "../components/Button";

const SignUpScreen = () => {
  const [participant, setParticipant] = useState("");

  return (
    <SignInSignUp>
      <FormInput label="Email" onChange={() => {}} />
      <FormInput label="Password" hideInput onChange={() => {}} />
      <FormInput label="Username" onChange={() => {}} />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around"
        }}
      >
        <View style={{ flex: 1 }}>
          <FormInput label="Age" onChange={() => {}} />
        </View>
        <View
          style={{
            flex: 1,
            height: 68,
            borderColor: "transparent",
            borderBottomColor: "#000",
            borderWidth: 0.6
          }}
        >
          <Picker
            selectedValue={participant}
            style={{
              width: "100%",
              height: "100%",
              elevation: 1,
              borderRadius: 8
            }}
            onValueChange={(itemValue, itemIndex) => {
              setParticipant(itemValue);
            }}
          >
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
          </Picker>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          marginTop: 35
        }}
      >
        <Button inverted buttonText="LOG IN" />
      </View>
      <TouchableOpacity
        style={{
          flex: 2,
          paddingHorizontal: 35,
          marginTop: 25
        }}
      >
        <Text>
          By clicking 'Sign Up',you accept the general Condition of Use
        </Text>
      </TouchableOpacity>
    </SignInSignUp>
  );
};

export default SignUpScreen;
