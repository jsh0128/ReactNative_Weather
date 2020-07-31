import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button, Image } from "react-native";

import { server, api_key } from "../config/config.json";
import axios from "axios";
import * as Location from "expo-location";
import HadApi from "./HadApi";

const GetApi = () => {
  const [api, setApi] = useState({
    name: "",
    sys: {
      country: "",
    },
    main: {
      temp: "",
      feels_like: "",
    },
    weather: [
      {
        main: "",
      },
    ],
  });
  const [hadApi, setHadApi] = useState(true);

  useEffect(() => {
    console.log("1");
    getPosition();
  }, []);

  const getPosition = async () => {
    console.log("3");
    try {
      await Location.requestPermissionsAsync();
      const location = await Location.getCurrentPositionAsync();
      await getApi(location.coords.longitude, location.coords.latitude).then(
        (response) => {
          console.log(response);
          setApi(response);
          setHadApi(false);
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const getApi = async (longitude, latitude) => {
    console.log(4);
    try {
      const { data } = await axios.get(
        `${server}?lat=${latitude}&lon=${longitude}&APPID=${api_key}&units=metric`
      );
      return data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <View>
      {hadApi ? (
        <Text>...Loading</Text>
      ) : (
        <View>
          <HadApi api={api} />
        </View>
      )}
    </View>
  );
};

export default GetApi;
