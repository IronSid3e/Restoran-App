import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

export default function SearchScreen() {
  const [searchApi, results] = useResults();
  console.log(results);

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <View>
      <SearchBar />
      <ResultList
        title="Ucuz Restoranlar"
        results={filterResultsByPrice("₺")}
      />
      <ResultList
        title="Uygun Restoranlar"
        results={filterResultsByPrice("₺₺")}
      />
      <ResultList
        title="Pahalı Restoranlar"
        results={filterResultsByPrice("₺₺₺")}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
