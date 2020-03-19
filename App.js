import React, { useState } from "react";
import { View, Text } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import fonts from "./app/fonts";

const getFonts = () => Font.loadAsync(fonts);

const App = () => {
  const [fontsLoaded, setFontLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            fontFamily: "PlayfairDisplay-BlackItalic",
            fontSize: 20
          }}
        >
          Deezer App Clone !
        </Text>
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      ></AppLoading>
    );
  }
};
export default App;
