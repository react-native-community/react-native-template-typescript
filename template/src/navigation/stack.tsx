import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screen/home";

//stacks
import TabNavigation from "./tab";

const Stack = createStackNavigator();

function StackRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Tab" component={TabNavigation} />
    </Stack.Navigator>
  );
}

export default StackRoute;
