import React, { useState, useEffect } from "react";
import { server, api_key } from "../config/config.json";
import axios from "axios";
import * as Location from "expo-location";
import { View } from "react-native";
import Weather from "./Weather";

const GetApi = () => {
  const [Name, setName] = useState("");
  const [latitude, setLatitude] = useState(""); //위도
  const [longtitude, setLongtitude] = useState(""); //경도
  const [api, setApi] = useState([]);

  const getPosition = async () => {
    try {
      await Location.requestPermissionsAsync();
      const location = await Location.getCurrentPositionAsync();
      setLatitude(location.coords.latitude);
      setLongtitude(location.coords.longitude);
    } catch (error) {
      console.log(error);
    }
  };

  const getApi = async () => {
    getPosition();
    const { data } = await axios.get(
      `${server}?lat=${latitude}&lon=${longtitude}&APPID=${api_key}&units=metric`
    );
    console.log(data.name);
    console.log(api);
    // setApi(data.name, data.main.temp, data.main.temp_min, data.main.temp_max);
    // console.log(setApi);
  };

  return (
    <View>
      <Weather getApi={getApi} Name={Name} setName={setName} />
    </View>
  );
};

export default GetApi;
