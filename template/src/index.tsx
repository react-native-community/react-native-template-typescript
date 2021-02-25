import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "react-native-splash-screen";

// main route
import StackRoute from "./navigation/stack";

// import { Email } from "./lib/validation";
// import AsyncStorage, { AsyncEnum } from "./lib/asyncStorage";

export default function App() {
  React.useEffect(() => {
    SplashScreen.hide(); // remove this line for actual project
  }, []);
  return (
    <NavigationContainer>
      <StackRoute />
    </NavigationContainer>
  );
}
