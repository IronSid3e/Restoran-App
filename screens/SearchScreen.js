import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultList";

export default function SearchScreen({ mode }) {
  const [searchApi, results] = useResults();
  const [term, setTerm] = useState("");
  const [userLocation] = useState({ latitude: 40.986, longitude: 29.024 });

  const filterResults = (price) => {
    return results.filter((result) => {
      const priceMatch = result.price === price;
      if (mode === "nearby") {
        if (userLocation && result.latitude && result.longitude) {
          const distance = getDistanceInKm(
            userLocation.latitude,
            userLocation.longitude,
            result.latitude,
            result.longitude,
          );
          return priceMatch && distance <= 1;
        }
        return false;
      }
      return priceMatch;
    });
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text style={styles.modeText}>
        {mode === "nearby"
          ? "📍 1km Yakınındaki Mekanlar"
          : "🍴 Tüm Restoranlar"}
      </Text>
      <ScrollView>
        <ResultList title="Ucuz Restoranlar" results={filterResults("₺")} />
        <ResultList title="Uygun Restoranlar" results={filterResults("₺₺")} />
        <ResultList title="Pahalı Restoranlar" results={filterResults("₺₺₺")} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  modeText: {
    marginLeft: 15,
    fontSize: 14,
    color: "gray",
    fontWeight: "600",
    marginBottom: 5,
  },
});
