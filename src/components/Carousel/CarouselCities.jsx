import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import {useGetAllCitiesQuery} from'../../features/CitiesApi'
import Carousel from './Carousel'

export default function CarouselCities({item}) {
    const dimension = Dimensions.get('window')
    let { data : cities } = useGetAllCitiesQuery('')


    return (
        <View style={{...styles.container, width: dimension.width}}>
                {cities ? <Carousel data={cities.slice(0, 12)} range={2} interval={3}  /> : <Text>Loading</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 50,
        marginTop: 10
    },
})