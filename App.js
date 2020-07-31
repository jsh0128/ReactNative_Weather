import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import GetApi from "./src/GetApi";
import Circle from "./Circle";
import FineDust from "./FineDust";
import BootomBarMenu from "./BottomBarMenu";
import TimeWeather from "./TimeWeather";
import TopBar from "./TopBar";

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
      <GetApi />
      <Circle />
      <FineDust />
      <BootomBarMenu />
      <TimeWeather />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007EEF",
    alignItems: "center",
    justifyContent: "center",
  },
});
