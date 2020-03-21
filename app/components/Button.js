import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

function Button({ buttonText, inverted, route, routeName }) {
  inverted = inverted
    ? { backgroundColor: "#C72353", color: "#fff", borderColor: "transparent" }
    : {};
  return (
    <TouchableOpacity
      onPress={() => {
        route.navigate(routeName);
      }}
      style={styles.buttonContainer}
    >
      <Text style={{ ...styles.text, ...inverted }}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 13,
    marginVertical: 8,
    flex: 1
  },
  text: {
    color: "#000",
    borderColor: "#000",
    borderWidth: 1,
    fontSize: 17,
    textAlign: "center",
    paddingHorizontal: 10,
    paddingVertical: 13,
    backgroundColor: "#F5EDED",
    borderRadius: 22,
    fontFamily: "quicksand-Bold"
  }
});

export default Button;
