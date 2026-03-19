import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DiscoverScreen from "./DiscoverScreen";
import ResultsShowScreen from "./ResultsShowScreen";

const Stack = createNativeStackNavigator();

export default function DiscoverStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DiscoverMain"
        component={DiscoverScreen}
        options={{ headerTitle: "Yakınımdaki Lezzetler" }}
      />

      <Stack.Screen name="ResultsShow" component={ResultsShowScreen} />
    </Stack.Navigator>
  );
}
