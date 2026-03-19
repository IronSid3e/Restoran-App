import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../screens/SearchScreen";
import ResultsShowScreen from "../screens/ResultsShowScreen";

const Stack = createNativeStackNavigator();

export default function DiscoverStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Keşfet" options={{ headerTitle: "Yakınımdakiler" }}>
        {(props) => <SearchScreen {...props} mode="nearby" />}
      </Stack.Screen>
      <Stack.Screen
        name="ResultsShow"
        component={ResultsShowScreen}
        options={{ title: "Detay" }}
      />
    </Stack.Navigator>
  );
}
