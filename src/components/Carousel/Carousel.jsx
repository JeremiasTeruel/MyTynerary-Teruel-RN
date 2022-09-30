import { View, Text, StyleSheet, ScrollView, Dimensions, ImageBackground} from 'react-native'
import React, {useState, useEffect} from 'react'

export default function Carousel(props) {
    const range = props.range
    const SlidesLimit = (props.slides * range)
    const [start,setStart] = useState(0)
    const [end,setEnd] = useState(start + range)
    const [intervalId, setIntervalId] = useState()
    const cities = props.data
    const interval = props.interval * 1000
    const dimension = Dimensions.get('window')
    const itemView = (item) => (
            <View key={item.city} style={styles.container}>
                    <ImageBackground style={[styles.image, {resizeMode: 'contain'}]} source={{uri:item.photo}}>
                        <Text style={styles.text1}>{item.city}</Text>
                        <Text style={styles.text}>{item.country}</Text>
                    </ImageBackground>
            </View>
    )

    useEffect(() =>{
        let id = setInterval(function (){
            next()
        }, interval)
        setIntervalId(id)
        return() => clearInterval(id);
        }, [start])

            function next (){
                if(start < SlidesLimit - range){
                setStart(start+range)
                setEnd( end+range )
                } else{
                    setStart(0)
                    setEnd(range)
                }
            }

    return (
        <ScrollView horizontal={true} pagingEnabled>
            {cities.slice(start, end).map(itemView)}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    image: {
        justifyContent: 'center',
        height: '70%',
        width: 300
    },
    text1: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    text: {
        fontSize: 20,
        color: '#000',
        width: 100,
    }
})