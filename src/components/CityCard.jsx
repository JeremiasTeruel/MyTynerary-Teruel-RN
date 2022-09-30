import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useNavigation } from "@react-navigation/native";

export default function CityCard(props) {

    const navigation = useNavigation()
    const itemView = (item) => {
        const goToCity = () => {
            navigation.navigate('CityDetail', {
                id: item._id
            });
        }
        return (
            <Pressable key={item._id} onPress={() => goToCity()}>
                <ImageBackground style={styles.image} source={{uri: item.photo}} resizeMode="cover">
                    <View key={props.city} style={styles.container}>
                        <Text style={styles.city}>{item.city}</Text>
                        <Text style={styles.country}>{item.country}</Text>
                    </View>
                </ImageBackground>
            </Pressable>
        )
    }
    
    return (
        <ScrollView>
        <View>
            {props.data?.map(itemView)}
        </View>
    </ScrollView>
)

}
const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 250,
        width: 250,
        marginBottom: 30,
    },
    city: {
        fontSize: 35,
        fontWeight: "bold",
    },
    country: {
        fontSize: 25,
        fontWeight: "bold",
    },
})