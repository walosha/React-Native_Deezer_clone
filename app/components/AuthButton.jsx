import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const AuthButton = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 8,
        justifyContent: "center",
        //alignItems: "center",
        backgroundColor: "blue"
      }}
    >
      <View>
        <Ionicons color="blue" name="logo-facebook" size={32} />
      </View>
      <View>
        <Text style={{ color: "#fff" }}>Facebook</Text>
      </View>
    </View>
  );
};

export default AuthButton;
