import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../screens/SearchScreen";
import ResultsShowScreen from "../screens/ResultsShowScreen";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Ana Sayfa" options={{ headerTitle: "Restoranlar" }}>
        {(props) => <SearchScreen {...props} mode="all" />}
      </Stack.Screen>
      <Stack.Screen
        name="ResultsShow"
        component={ResultsShowScreen}
        options={{ title: "Detay" }}
      />
    </Stack.Navigator>
  );
}
