import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import fonts from "./app/fonts";
import Navigator from "./app/routes/rootRoute";

const getFonts = () => Font.loadAsync(fonts);

const App = () => {
  const [fontsLoaded, setFontLoaded] = useState(false);
  if (fontsLoaded) {
    return <Navigator />;
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
