import { View, Text, StyleSheet, ScrollView, Dimensions, ImageBackground} from 'react-native'
import React, {useState, useEffect} from 'react'

export default function Carousel(props) {
    const dimension = Dimensions.get('window')
    const cities = props.data

    const itemView = (item) => (
            <View key={item.city} style={{...styles.container, width: dimension.width}} >
                <ImageBackground style={[styles.image, {resizeMode: 'cover'}]} source={{uri:item.photo}}>
                    <Text style={styles.text1}>{item.city}</Text>
                    <Text style={styles.text}>{item.country}</Text>
                </ImageBackground>
            </View>
    )

    return (
        <ScrollView horizontal={true} pagingEnabled style={styles.scrollview}>
            {cities?.map(itemView)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        height: '100%',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    text1: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center'
    },
    scrollview:{
        width: '100%',
        height: 350,
    },
})