import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const Weather = ({ getApi, setName }) => {
  return (
    <View>
      {/* <TextInput
        style={styles.input}
        placeholder="지역을 입력하세요"
        onChangeText={(event) => {
          setName(event);
          getApi();
        }}
      /> */}
      <Button title="정보확인" onPress={getApi} />
      {/* <Text>(현재위치)</Text>
      <Text> 강남구 대치동</Text>
      <Text> 맑음</Text>

      <Text>27°</Text>
      <Text>어제보다 6°나 높아요</Text>
      <Text>최고 28°/최저 16°</Text> */}
    </View>
  );
};
const styles = StyleSheet.create({
  now: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  where: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  weather: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Weather;
