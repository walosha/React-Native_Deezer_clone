import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Button from "../components/Button";

const welcomeScreen = () => {
  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#fff" }}>
      <View style={{ flex: 1 }}>
        <Image
          resizeMode="contain"
          style={{ height: "100%", width: "100%" }}
          source={require("../../assets/images/heroLogo.png")}
        />
      </View>
      <View style={{ flex: 2 }}>
        <Image
          resizeMode="contain"
          style={{ height: "100%", width: "100%" }}
          source={require("../../assets/images/hero.png")}
        />
      </View>
      <View style={{ flex: 2 }}>
        <View style={{ paddingHorizontal: 19, marginVertical: 30 }}>
          <Text style={styles.heroText}>
            Stream any song, anywhere, anytime
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row"
          }}
        >
          <Button buttonText="Log In" />
          <Button inverted buttonText="sign out " />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroText: {
    fontSize: 27,
    fontFamily: "quicksand-Bold"
  }
});
export default welcomeScreen;
