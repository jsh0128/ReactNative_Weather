import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default function FineDust() {
    return (
      <View style={styles.container}>
        <View style={styles.box}>
            <Image style={styles.image}
                source={require('./assets/devil.png')}/>
            <View>
                <Text style={styles.text}>미세미세</Text>
                <Text style={styles.text}>매우 나쁨</Text>
            </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      width:"100%",
      height: "7%",
      marginBottom: 15,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      flexDirection: "row"
    },
    box: {
        marginTop: screenHeight * 0.02,
        width: screenWidth * 0.27,
        height: screenHeight * 0.055,
        flexDirection: 'row',
        backgroundColor: '#3694F4',
        borderRadius: screenWidth * 0.03,
        alignItems: 'center',
        marginRight: 10,
    },
    image: {
        width: screenWidth * 0.07,
        height: screenWidth * 0.07,
        margin: screenWidth * 0.023,
    },
    text: {
        color: 'white',
        fontSize: screenWidth * 0.033,
    }
});