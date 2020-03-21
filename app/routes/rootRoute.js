import React, { useReducer, Fragment } from "react";
// import { ActivityIndicator, AsyncStorage } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import CenterChild from "../components/CenterChild";
import welcomeScreen from "../screen/welcomeScreen";
import SignInSignUpScreen from "../screen/SignInSignUpScreen";
// import LogInForm from "../screens/signInWithEmailScreen";
// import LogUpForm from "../screens/signUpWithEmailScreen";
// import HelpScreen from "../screens/helpScreen";
// import onGoingCallScreen from "../screens/onGoingCallScreen";
// import AuthenticatedRoute from "../routes/AuthenticatedRoute";
// import { authReducer, initialState } from "../context/Authreducer";
// import { AuthContext } from "../context/AuhContext";

const Stack = createStackNavigator();

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null
        }}
      >
        <Stack.Screen name="welcomeScreen" component={welcomeScreen} />
        <Stack.Screen
          name="SignInSignUpScreen"
          component={SignInSignUpScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
