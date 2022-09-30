import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, ImageBackground,} from 'react-native'
import React from 'react'
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import CarouselCities from '../Carousel/CarouselCities'
import { useNavigation } from '@react-navigation/native';
import Button from '../Button';
import Footer from '../Footer';


const image = {uri: 'https://w0.peakpx.com/wallpaper/224/496/HD-wallpaper-mountain-full-paisaje.jpg'}

export default function HomeScreen() {
    const navigation = useNavigation()
    const itemView = (item) => {
        const goToCities = () => {
            navigation.navigate('cities')
        }
    }
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Text style={styles.text1}>WELCOME, TRAVELLER!</Text>
                <Text style={styles.text}>Ready to know your destiny?</Text>
                <Button navigation={navigation}/>
                <Text style={styles.popularCities}>Popular Cities</Text>
            <CarouselCities />
            <Footer/>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1:{
        color: '#000',
        fontSize: 35,
        fontWeight: "bold",
        padding: 15,
        marginTop: 20,
        textShadowColor: '#fff',
        textShadowOffset: {width: 3, height: 3}
    },
    text: {
        color: '#000',
        fontSize: 25,
        fontWeight: "bold",
        width: 300,
        textAlign: 'center',
        borderRadius: 20,
        padding: 15,
        marginBottom: 20
        },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        width: 500
    },
    popularCities:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        textDecorationLine: 'underline',
        // marginBottom: 10
    }
})