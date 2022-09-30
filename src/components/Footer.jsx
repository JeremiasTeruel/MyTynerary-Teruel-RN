import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function Footer() {
    let today = new Date();
    let year = today.getFullYear();


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Copyright ©MyTinerary | {year}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        width:'100%',
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
    },
    text:{
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
    },
    image:{
        height: '80%',
        width: 30,
    },
}) 