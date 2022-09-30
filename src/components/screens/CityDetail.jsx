import { useGetCityQuery } from "../../features/CitiesApi";
import { useGetCityItinerariesQuery } from "../../features/ItinerariesApi";
import { useEffect, useState } from "react"
import { useRoute } from "@react-navigation/native"
import { ImageBackground, ScrollView, Text, View, StyleSheet } from "react-native"
import Itinerary from "../Itinerary";

export default function CityDetail(){
    const route = useRoute()
    const {id} = route.params
    const {data: city} = useGetCityQuery(id)
    console.log(city)
    const {data: resItinerary} = useGetCityItinerariesQuery(id)
    const [resCity, setResCity] = useState({})
    const [itinerary, setItinerary] = useState({})
    useEffect(() => {
        city && setResCity(city)
        resItinerary && setItinerary(resItinerary)
    }, [city, resItinerary])

    const image = {uri: 'https://w0.peakpx.com/wallpaper/224/496/HD-wallpaper-mountain-full-paisaje.jpg'}

    return(
        <ImageBackground source={image} resizeMode='cover' style={{width: '100%', height: '100%'}}>
            <ScrollView>
                {id ? <>
                    <ImageBackground>
                        <Text>{city.city}</Text>
                        <Text>Country: {city.country}</Text>
                    </ImageBackground>
                    <View>
                        <View>
                            <Text>
                                <Text>Foundation: {new Date(city.foundation).getFullYear()}</Text>
                            </Text>
                            <Text>
                                <Text>Population: {city.population}</Text>
                            </Text>
                        </View>
                    </View>
                    {itinerary?.length?
                        itinerary.map(it => {
                            return (
                                <Itinerary data={it} key={it._id}/>
                            )
                        })
                    : null }
                    {itinerary?.length? null 
                    : <Text>We'll have some itineraries soon...</Text>}
                </> 
                : null
                }
            </ScrollView>
        </ImageBackground>
    )
}