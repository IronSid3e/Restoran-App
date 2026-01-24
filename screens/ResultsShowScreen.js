import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default function ResultsShowScreen({ route }) {
  const [result, setResult] = useState(null);
  const id = route.params.id;

  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Image
        style={{ width: 350, height: 250, margin: 15 }}
        source={{ uri: result.image_url }}
      />
      <Text style={{ margin: 5, fontSize: 30, fontWeight: "bold", textAlign: "center" }}>
        {result.name}{" "}
      </Text>
      <Text>{result.phone} </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
