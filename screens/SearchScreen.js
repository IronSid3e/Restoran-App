import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";


export default function SearchScreen() {
    const [searchApi, results] = useResults();
    console.log(results);
  return (
    <View>
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({});
