import * as React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import HomeScreen from "../screen/home";
import CustomTabBar from "./customTabBar";

const Tab = createBottomTabNavigator();

// const renderIcon = ({ color }, name) => {
//     const size = hp(24);
//     return <Icon name={name} height={size} width={size} color={color} />
// }

export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabStyle,
        activeTintColor: "red",
      }}
      tabBar={(props: any) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="TabHome"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          //   tabBarIcon: (props) => renderIcon(props, "home"),
        }}
      />
      <Tab.Screen
        name="tab2"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home2",
          //   tabBarIcon: (props) => renderIcon(props, "home"),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabStyle: {
    height: 60,
  },
});
