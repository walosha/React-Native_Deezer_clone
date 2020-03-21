import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const AuthButton = ({ bgColor, logo, logoColor = "red", textColor }) => {
  const container = {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 4,
    paddingHorizontal: 8,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: bgColor ? bgColor : "blue",
    borderRadius: 7,
    marginRight: 10,
    elevation: 7
  };
  return (
    <TouchableOpacity style={container}>
      <FontAwesome color={logoColor} name={logo} size={27} />
      <Text
        style={{ color: textColor, fontSize: 15, fontFamily: "quicksand-Bold" }}
      >
        Facebook
      </Text>
    </TouchableOpacity>
  );
};

export default AuthButton;
