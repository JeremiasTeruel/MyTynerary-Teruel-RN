import { useGetCityQuery } from "../../features/CitiesApi";
import { useGetCityItinerariesQuery } from "../../features/ItinerariesApi";
import { useEffect, useState } from "react"
import { useRoute } from "@react-navigation/native"
import { ImageBackground, ScrollView, Text, View, StyleSheet, Pressable, Image } from "react-native"
import Itinerary from "../Itinerary";
import Footer from "../Footer";

export default function CityDetail({navigation}){
    const route = useRoute()
    const {id} = route.params
    const {data: city} = useGetCityQuery(id)
    const {data: resItinerary} = useGetCityItinerariesQuery(id)
    const [resCity, setResCity] = useState({})
    const [itinerary, setItinerary] = useState({})
    const pressBtn = () => {
        navigation.navigate('Cities')
    }
    useEffect(() => {
        city && setResCity(city)
        resItinerary && setItinerary(resItinerary)
    }, [city, resItinerary])
    
    const image = {uri: 'https://w0.peakpx.com/wallpaper/224/496/HD-wallpaper-mountain-full-paisaje.jpg'}
    
    return(
        <ImageBackground source={image} resizeMode='cover' style={{width: '100%', height: '100%'}}>
            <ScrollView>
                {id && city ? <>
                    <ImageBackground source={{ uri: city.photo }} style={styles.cityImage}>
                        <Text style={styles.city}>{city.city}</Text>
                        <Text style={styles.country}>{city.country}</Text>
                        <Text style={styles.foundation}>Foundation: {new Date(city.foundation).getFullYear()}</Text>
                        <Text style={styles.population}>Population: {city.population}</Text>
                    </ImageBackground>
                    <View style={styles.itineraries}>
                        {itinerary?.length?
                            itinerary.map(it => {
                                return (
                                    <Itinerary data={it} key={it._id} />
                                    )
                                })
                                : null }
                        {itinerary?.length? null
                        : <Text style={styles.NoItinerariesText}>We'll have some itineraries soon...</Text>}
                        <Pressable style={styles.BackButton}>
                            <Text onPress={pressBtn} style={styles.backText}>Back to Cities</Text>
                        </Pressable>
                    </View>
                </> 
                : null
            }
            </ScrollView>
            <Footer/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    cityImage:{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '88%',
        height: 300,
        marginLeft: '10%',
        marginTop: 30,
        marginBottom: 20,
    },
    city: {
        fontSize: 35,
        fontWeight: "bold",
    },
    country: {
        fontSize: 25,
        fontWeight: "bold",
    },
    foundation:{
        fontSize: 15,
        fontWeight: "bold",
    },
    population:{
        fontSize: 15,
        fontWeight: "bold",
    },
    BackButton:{
        height: 100,
        width: 80,
        marginTop: 30,
        alignSelf: 'center'
    },
    backText:{
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#000',
        borderRadius: 360,
        padding: 10,
        textDecorationLine: 'underline',
    },
    NoItinerariesText:{
        fontSize: 25,
        fontWeight: "bold",
    }
})