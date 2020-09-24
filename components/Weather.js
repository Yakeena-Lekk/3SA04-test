import React from 'react';
import {StyleSheet, View } from 'react-native';
import Weather from './Weather';
import { StatusBar } from 'expo-status-bar';

export default function WeatherScreen({route}) {    
    return (
        <View style={style.one}>
            <Weather zipCode={route.params.zipCode}/>
            <StatusBar style="auto" />
        </View>
    );
}

const style =  StyleSheet.create({
    one:{
        marginTop : 50,
        alignItems : 'center',
    }
})