import React from "react";
import { View, Text, StyleSheet, TextInput, Button, Image } from "react-native";

const HadApi = ({ api }) => {
  return (
    <View>
      <Text>위치:{api.sys.country}</Text>
      <Text>{api.name}</Text>
      <Text>현재온도:{api.main.temp}</Text>
      <Text>체감온도:{api.main.feels_like}</Text>
      <Text>날씨: {api.weather[0].main}</Text>
      {/* <WiThunderstorm /> */}
      {/* {api.weather[0].id > 199 && api.weather[0].id < 233 ? (
        <WiThunderstorm />
      ) : api.weather[0].id > 299 && api.weather[0].id < 322 ? (
        <>
          <Text>이슬비</Text>
          <WiRainMix />
        </>
      ) : api.weather[0].id > 600 && api.weather[0].id < 622 ? (
        <WiSnow />
      ) : api.weather[0].id == 800 ? (
        <WiDaySunny />
      ) : (
        <WiCloud />
      )} */}
    </View>
  );
};

export default HadApi;
