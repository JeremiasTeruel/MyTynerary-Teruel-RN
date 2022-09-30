// import React from 'react'
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, ScrollView, Image, Button, FlatList } from 'react-native';
// import { SafeAreaView } from 'react-native';
// import CityCard from './src/components/CityCard';

// export default function Intro() {

//     function learnMore(){
//         alert("Hello Friend")
//       }
    
//       const cities = [
//         {city: 'Madrid'},
//         {city: 'London'},
//         {city: 'Buenos Aires'},
//         {city: 'Turin'},
//         {city: 'Marruecos'},
//         {city: 'Miami'},
//         {city: 'Tokio'},
//         {city: 'Berlin'},
//         {city: 'Salvador'},
//         {city: 'Cancun'},
//       ]
//   return (
//     <View style={styles.container}>

//           <Text style={styles.text}>
//             What is Lorem Ipsum?
//             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
//           </Text>
//           <View style={styles.imageContainer}>
//             <Image style={styles.image} source={{
//               uri: 'https://image.shutterstock.com/image-vector/travel-logo-vector-260nw-1151807864.jpg'
//             }}/>
//           </View>
//           <Button onPress={learnMore} title="Get Hi!" color="#841584" accessibilityLabel='Learn more about us'/>

//           <FlatList data={cities} numColumns={2} showsVerticalScrollIndicator={false} keyExtractor={(city) => city.city} renderItem={({item}) => <CityCard city={item.city}/>}/>
//           {cities.map((city) => <Text>{city.city}</Text>)}
//       <StatusBar style="light" />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#000',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     text: {
//       color: 'white',
//     },
//     image: {
//       width: 200,
//       height: 200,
//     },
//     imageContainer: {
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });