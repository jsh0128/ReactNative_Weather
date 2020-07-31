import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Circle() {
    return (
      <View style={styles.container}>
        <Image
            style={styles.circle1}
            source={require('./assets/circle.png')}/>
        <Image
            style={styles.circle2}
            source={require('./assets/circle.png')}/>
        <Image
            style={styles.circle3}
            source={require('./assets/circle.png')}/>
        <Image
            style={styles.circle4}
            source={require('./assets/circle.png')}/>
        <Image
            style={styles.circle5}
            source={require('./assets/circle.png')}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width:"100%",
      height:"3%",
      backgroundColor: '#007EEF',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "row"
    },
    circle1: {
        height: 10,
        width: 10,
    },
    circle2: {
        height: 10,
        width: 10,
        marginLeft: 7,
    },
    circle3: {
        height: 10,
        width: 10,
        marginLeft: 7,
    },
    circle4: {
        height: 10,
        width: 10,
        marginLeft: 7,
    },
    circle5: {
        height: 10,
        width: 10,
        marginLeft: 7,
    },
  });