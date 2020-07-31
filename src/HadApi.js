import React from "react";
import { View, Text, StyleSheet, TextInput, Button, Image } from "react-native";

const HadApi = ({ api }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>(현재 위치)</Text>
      <Text style={styles.text2}>{api.name}</Text>
      <Text style={styles.text3}>{api.weather[0].main}</Text>
      <Image style={styles.sun} source={require("../assets/sun.png")} />
      <Text style={styles.text4}>{api.main.temp}°</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "40%",
    backgroundColor: "#007EEF",
    alignItems: "center",
    justifyContent: "center",
  },
  sun: {
    marginTop: 20,
    height: 100,
    width: 100,
  },
  text1: {
    marginTop: 340,
    fontSize: 15,
    color: "white",
  },
  text2: {
    marginTop: 10,
    fontSize: 25,
    color: "white",
  },
  text3: {
    marginTop: 15,
    fontSize: 17,
    color: "white",
  },
  text4: {
    marginLeft: 10,
    marginTop: 20,
    fontSize: 30,
    color: "white",
  },
  text5: {
    marginTop: 10,
    fontSize: 17,
    color: "white",
  },
  text6: {
    marginTop: 6,
    fontSize: 12,
    color: "white",
  },
});

export default HadApi;
