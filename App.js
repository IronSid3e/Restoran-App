import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "@expo/vector-icons/Feather";
import HomeStack from "./screens/HomeStack";
import DiscoverStack from "./screens/DiscoverStack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName = route.name === "HomeTab" ? "home" : "map-pin";
            return <Feather name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#e53935",
        })}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={{ title: "Ana Sayfa" }}
        />
        <Tab.Screen
          name="DiscoverTab"
          component={DiscoverStack}
          options={{ title: "Keşfet" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
