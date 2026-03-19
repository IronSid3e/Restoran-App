import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  View,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import api from "../api/mock";
import Feather from "@expo/vector-icons/Feather";

export default function ResultsShowScreen({ route }) {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await api.get(`/restaurants/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }

  const makeCall = () => {
    if (result.phone) {
      Linking.openURL(`tel:${result.phone}`);
    }
  };
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        style={{ width: 350, height: 250, margin: 15 }}
        source={{ uri: result.image_url }}
      />
      <Text
        style={{
          margin: 5,
          fontSize: 30,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {result.name}{" "}
      </Text>
      <TouchableOpacity style={styles.phoneContainer} onPress={makeCall}>
        <Feather name="phone" size={20} color="#e53935" />
        <Text style={styles.phoneText}>
          {result.phone ? result.phone : "Telefon bilgisi yok"}
        </Text>
      </TouchableOpacity>
      {result.is_closed ? <Text>Kapalı </Text> : <Text>Açık </Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  phoneText: {
    fontSize: 18,
    marginLeft: 10,
    color: "#e53935",
    fontWeight: "600",
  },
  phoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    width: "90%",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#eee",
  },
});
