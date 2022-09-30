
import { useNavigation } from "@react-navigation/native";
import { View, Text, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function Itinerary(props){
    const itinerary = props.data

    return (
        <>
        <ScrollView>
            <View>
                <Text>{itinerary.name}</Text>
                <Image source={{uri: itinerary.user?.photo}} style={{width: 100, borderRadius:50,height: 100,resizeMode: 'contain'}}/>
                <Text>{itinerary.user.name} {itinerary.user.lastname}</Text>
            <View>
                <View>
                    <Text>{itinerary.likes} ❤️</Text>
                    <Text>Duration: {itinerary.duration}hs.</Text>
                    <Text>{itinerary.tags.map(tag => "#" + tag + " ")}</Text>
                </View>
                    <Text>{"💵".repeat(itinerary.price)}</Text>
            </View>
            </View>
        </ScrollView>
        </>
    )
}