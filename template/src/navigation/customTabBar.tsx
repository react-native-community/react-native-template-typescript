import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StyleProp,
} from "react-native";

interface Props {
  state: any;
  descriptors: any;
  navigation: any;
  activeTintColor: String;
  inactiveTintColor: String;
  style: any;
}

export default function MyTabBar({
  state,
  descriptors,
  navigation,
  activeTintColor,
  inactiveTintColor,
  style,
}: Props) {
  return (
    <SafeAreaView style={[styles.tabBorder]}>
      <View style={[style, styles.container]}>
        {state.routes
          ? state.routes.map((route: any, index: number) => {
              const { options } = descriptors[route.key];
              const label =
                options.tabBarLabel !== undefined
                  ? options.tabBarLabel
                  : options.title !== undefined
                  ? options.title
                  : route.name;
              const iconName = options.iconName;
              const isFocused = state.index === index;
              const color = isFocused ? activeTintColor : inactiveTintColor;
              const labelTextStyle: StyleProp<any> = {
                color,
                fontSize: 16,
                marginTop: 2,
              };

              const onPress = () => {
                const event = navigation.emit({
                  type: "tabPress",
                  target: route.key,
                });
                if (!isFocused && !event.defaultPrevented) {
                  navigation.navigate(route.name);
                }
              };

              const onLongPress = () => {
                navigation.emit({
                  type: "tabLongPress",
                  target: route.key,
                });
              };

              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={1}
                  accessibilityRole="button"
                  accessibilityState={isFocused ? ["selected"] : []}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={[styles.singleButton]}
                >
                  {options.tabBarIcon
                    ? options.tabBarIcon({ color, label: iconName })
                    : null}
                  <Text style={labelTextStyle}>{label}</Text>
                </TouchableOpacity>
              );
            })
          : null}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tabBorder: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 0.41,
    elevation: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 0,
    backgroundColor: "#fff",
  },
  singleButton: {
    alignItems: "center",
    paddingHorizontal: 5,
    justifyContent: "center",
    flex: 1 / 2,
  },
});
