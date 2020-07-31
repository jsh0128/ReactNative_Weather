import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function WeatherFrame(props) {
    const setImage=() => {
        if(props.temp > 20)
        {
            return './assets/sun.png'
        }
        else{
            return './assets/cloud.png' 
        }
    }
    return (
      <View style={styles.container}>
          <Text style={styles.text1}>{props.time}</Text>
          <Image
                style={styles.weather}
                source={require('./assets/sun.png')}/>
            <Text style={styles.text2}>{props.temp}</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#007EEF',
      alignItems: 'center',
    },
    text1:{
        fontSize: 15,
        marginBottom: 20,
        color: "white"
    },
    text2: {
        fontSize: 18,
        marginLeft:10,
        color: "white"
    },
    weather: {
        marginLeft: 10,
        width: 70,
        height: 70,
        marginBottom: 20,
    },
  });