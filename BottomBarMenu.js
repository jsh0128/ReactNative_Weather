import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function BootomBarMenu() {
    return (
      <View style={styles.container}>
          <Text style={styles.text1}>오늘</Text>
          <View style={styles.container2}>
            <Text style={styles.text2}>온도</Text>
            <Text style={styles.text3}>체감</Text>
            <Text style={styles.text4}>자외선</Text>
            <Text style={styles.text5}>감수</Text>
            <Text style={styles.text6}>바람</Text>
            <Text style={styles.text7}>습도</Text>
          </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width:"100%",
      height:"5%",
      backgroundColor: '#0163BE',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 8,
    },
    container2: {
        flexDirection: "row",
    },
    text1:{
        color: "white"
    },
    text2:{
        color: "white"
    },
    text3:{
        marginLeft: 7,
        color: "white"
    },
    text4:{
        marginLeft: 7,
        color: "white"
    },
    text5:{
        marginLeft: 7,
        color: "white"
    },
    text6:{
        marginLeft: 7,
        color: "white"
    },
    text7:{
        marginLeft: 7,
        color: "white"
    },
  });