import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import useResults from "../hooks/useResults";
import Feather from "@expo/vector-icons/Feather";

const getDistanceInKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const { width } = Dimensions.get("window");

export default function DiscoverScreen({ navigation }) {
  const [searchApi, results] = useResults();
  const [userLocation] = useState({ latitude: 40.986, longitude: 29.024 });

  const [index, setIndex] = useState(0);

  const nearbyResults = results.filter((result) => {
    if (userLocation && result.latitude && result.longitude) {
      const distance = getDistanceInKm(
        userLocation.latitude,
        userLocation.longitude,
        result.latitude,
        result.longitude,
      );

      return distance <= 1;
    }
    return false;
  });

  if (nearbyResults.length === 0 || !nearbyResults[index]) {
    return (
      <View style={styles.center}>
        <Text>Lezzetler aranıyor...</Text>
      </View>
    );
  }

  const currentCard = nearbyResults[index];

  const nextCard = () => {
    if (index < nearbyResults.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: currentCard.image_url }} style={styles.image} />
        <View style={styles.infoBox}>
          <Text style={styles.name}>{currentCard.name}</Text>
          <Text style={styles.subText}>
            {currentCard.rating} ⭐ | {currentCard.price}
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.circleBtn} onPress={nextCard}>
            <Feather name="x" size={30} color="red" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.circleBtn, { backgroundColor: "#4CAF50" }]}
            onPress={() =>
              navigation.navigate("ResultsShow", { id: currentCard.id })
            }
          >
            <Feather name="heart" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: width * 0.9,
    height: "75%",
    backgroundColor: "white",
    borderRadius: 20,
    elevation: 10,
    overflow: "hidden",
  },
  image: { width: "100%", height: "70%" },
  infoBox: { padding: 20, alignItems: "center" },
  name: { fontSize: 24, fontWeight: "bold" },
  subText: { fontSize: 18, color: "gray", marginTop: 5 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  circleBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});
