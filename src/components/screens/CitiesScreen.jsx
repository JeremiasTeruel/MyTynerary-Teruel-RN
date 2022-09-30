import { View, Text, StyleSheet, TextInput,ImageBackground, SafeAreaView, ScrollView} from 'react-native'
import React, {useRef, useState} from 'react'
import { useGetAllCitiesQuery } from '../../features/CitiesApi'
import CityCard from '../CityCard'
import Footer from '../Footer'
const image = {uri: 'https://w0.peakpx.com/wallpaper/224/496/HD-wallpaper-mountain-full-paisaje.jpg'}

export default function CitiesScreen() {
    const [searchValue,setSearchValue] = useState()
    
    const search = useRef(null)
    

    let{ data : cities } = useGetAllCitiesQuery( searchValue ? searchValue : '')

    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <ScrollView>
                    <View>
                        <TextInput style={styles.input} onChangeText={setSearchValue} value={searchValue} placeholder= 'Search' />
                        <CityCard data={cities} />
                    </View>
                </ScrollView>
                <Footer/>
            </ImageBackground>
        </SafeAreaView>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    text: {
        color: 'white'
    },
    input: {
        backgroundColor: '#fff',
        width: 200,
        margin: 12,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 10,
        padding: 10,
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        width: 500,
        minHeight: 500,
        },
})