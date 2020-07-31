import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function TopBar() {
  return (
    <View style={styles.container}>
      <Image style={styles.option} source={require("./assets/option.png")} />
      <View style={styles.container2}>
        <Image style={styles.share} source={require("./assets/share.png")} />
        <Image style={styles.plus} source={require("./assets/plus.png")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "7%",
    backgroundColor: "#0163BE",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  container2: {
    flexDirection: "row",
  },
  option: {
    marginTop: 15,
    height: 30,
    width: 30,
  },
  share: {
    marginTop: 15,
    height: 30,
    width: 30,
  },
  plus: {
    marginLeft: 20,
    marginTop: 15,
    height: 30,
    width: 30,
  },
});
