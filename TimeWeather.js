import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import WeatherFrame from './WeatherFrame'

export default function TimeWeather() {
    return (
        <View style={styles.container}>
            <ScrollView horizontal={true}
            showsHorizontalScrollIndicator={false}>
                <WeatherFrame time="오후1시" temp="10°"/>
                <WeatherFrame time="오후2시" temp="11°"/>
                <WeatherFrame time="오후3시" temp="14°"/>
                <WeatherFrame time="오후4시" temp="17°"/>
                <WeatherFrame time="오후5시" temp="19°"/>
                <WeatherFrame time="오후6시" temp="21°"/>
                <WeatherFrame time="오후7시" temp="24°"/>
                <WeatherFrame time="오후8시" temp="26°"/>
                <WeatherFrame time="오후9시" temp="28°"/>
                <WeatherFrame time="오후10시" temp="3°"/>
                <WeatherFrame time="오후11시" temp="32°"/>
                <WeatherFrame time="오전12시" temp="35°"/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "26%",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "row"
    },
});