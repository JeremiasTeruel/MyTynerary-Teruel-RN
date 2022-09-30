import { View, Text, StyleSheet,ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import {useGetAllCitiesQuery} from'../../features/CitiesApi'
import Carousel from './Carousel'

export default function CarouselCities({item}) {

    let { data : cities } = useGetAllCitiesQuery('')


    return (
        <View style={[styles.container]}>
                {cities ? <Carousel data={cities.slice(0, 12)} range={1} slides={4} interval={3}  /> : <Text>Loading</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})