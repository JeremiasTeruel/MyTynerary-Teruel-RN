import { View, Text, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Itinerary(props){
    const itinerary = props.data

    return (
        <>
        <ScrollView>
            <View>
                <Text style={styles.itineraryName}>{itinerary.name}</Text>
                <View style={styles.container}>
                    <View>
                        <Image source={{uri: itinerary.user?.photo}} style={{width: 100, borderRadius:50,height: 100,resizeMode: 'contain'}}/>
                        <Text style={styles.nameLastName}>{itinerary.user.name} {itinerary.user.lastName}</Text>
                    </View>
                    <View style={styles.itineraryDataCont}>
                        <Text style={styles.likes}>{itinerary.likes} ❤️</Text>
                        <Text style={styles.duration}>Duration: {itinerary.duration}hs.</Text>
                        <Text style={styles.tags}>{itinerary.tags.map(tag => "#" + tag + " ")}</Text>
                        <Text style={styles.price}>$ {"💵".repeat(itinerary.price)}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
    },
    itineraryDataCont:{
        flex: 1,
        marginLeft: 20
    },
    itineraryName:{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
    nameLastName:{
        fontSize: 15,
        fontWeight: "bold",
        marginLeft: 5
    },
    likes:{
        fontSize: 15,
        fontWeight: "bold",
    },
    duration:{
        fontSize: 15,
        fontWeight: "bold",
    },
    tags:{
        fontSize: 15,
        fontWeight: "bold",
    },
    price:{
        fontSize: 15,
        fontWeight: "bold",
    }
})